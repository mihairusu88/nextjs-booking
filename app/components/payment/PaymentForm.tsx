'use client';

import React, { useState, useContext, useCallback, useEffect } from 'react';
import { CleaningModalContext } from '@/app/lib/utils/contextUtils';
import { PaymentElement, LinkAuthenticationElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeElements, StripeError } from '@stripe/stripe-js';
import { MdOutlineErrorOutline } from 'react-icons/md';
import Loading from '@/app/components/misc/Loading';
import apiService from '@/app/lib/services/apiService';
import { confirmPayment as stripeConfirmPayment } from '@/app/lib/utils/paymentUtils';
import toast from 'react-hot-toast';
import { getSession } from '@/app/lib/utils/authUtilsUI';
import { setOrderNonce } from '@/app/lib/utils/storageUtils';
import logService from '@/app/lib/services/logService';

const PaymentForm = () => {
  const { state, dispatch } = useContext(CleaningModalContext);
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkout = useCallback(async () => {
    const session = await getSession();
    const token = session?.access_token;

    const orderData = {
      data: {
        date: state.date,
        time: state.time,
        location: state.location.value,
        personId: state.person.id,
        categoryId: state.person.categoryId,
        amount: state.totalPrice,
        status: 'Succeeded',
        services: state.services.filter((item: Record<string, any>) => item.quantity > 0),
      },
      token,
    };
    const responseCheckout = await apiService.checkout.post(state.totalPrice);
    const responseCreateOrder = await apiService.orders.post({
      data: { ...orderData.data, paymentIntentId: responseCheckout.data.payment_intent_id },
      token: orderData.token,
    });

    return {
      ...responseCheckout,
      data: {
        ...responseCheckout.data,
        order: responseCreateOrder.data,
      },
    };
  }, [
    state.date,
    state.location.value,
    state.person.categoryId,
    state.person.id,
    state.services,
    state.time,
    state.totalPrice,
  ]);

  const confirmPayment = useCallback(
    async (elements: StripeElements, clientSecret: string, orderUuid: string) => {
      const nonce = setOrderNonce(orderUuid);
      const response = await stripeConfirmPayment(stripe, elements, clientSecret, orderUuid, nonce);

      return response;
    },
    [stripe],
  );

  const onSubmit = useCallback(async () => {
    toast.remove();
    if (elements == null) {
      return;
    }

    setIsLoading(true);

    try {
      const { error: submitError } = await elements.submit();

      if (submitError) {
        toast.error(submitError.message as string);
        return;
      }

      const checkoutResponse = await checkout();

      if (!checkoutResponse.success) {
        toast.error(checkoutResponse.data.message as string);
        return;
      }

      const confirmPaymentResponse = await confirmPayment(
        elements,
        checkoutResponse.data.client_secret,
        checkoutResponse.data.order.uuid,
      );

      if (!confirmPaymentResponse.success) {
        toast.error((confirmPaymentResponse.data as StripeError).message as string);
        return;
      }
    } catch (error) {
      logService.log(error);
      toast.error('Something went wrong. Please try again later.');
      //TODO: update order with status: "Incomplete"
    } finally {
      setIsLoading(false);
      dispatch({ type: 'setProceedCheckout', payload: false });
    }
  }, [checkout, confirmPayment, dispatch, elements]);

  useEffect(() => {
    if (state.proceedCheckout) {
      onSubmit();
    }
  }, [onSubmit, state.proceedCheckout]);

  return (
    <form id="payment-form" className="relative flex flex-col item-center w-full">
      {errorMessage && (
        <div role="alert" className="alert alert-error py-3 text-white text-sm mb-4">
          <MdOutlineErrorOutline className="w-[24px] h-[24px]" />
          <span>{errorMessage}</span>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <PaymentElement
          id="payment-element"
          className="w-full"
          onLoadError={() => {
            setErrorMessage('An error occurred while loading payment module. Please try again.');
          }}
          onReady={() => {
            setErrorMessage(null);
          }}
          onChange={(e) => {
            dispatch({ type: 'setIsPaymentInformationComplete', payload: e.complete });
          }}
        />
        <LinkAuthenticationElement
          id="link-authentication-element"
          className="w-full"
          options={{
            defaultValues: {
              email: state.user.email,
            },
          }}
          onLoadError={() => {
            setErrorMessage('An error occurred while loading payment module. Please try again.');
          }}
          onReady={() => {
            setErrorMessage(null);
          }}
          onChange={(e) => {
            dispatch({ type: 'setIsPaymentEmailAddressComplete', payload: e.complete });
          }}
        />
      </div>
      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center bg-white/90">
          <Loading className="text-primary" size="large" />
        </div>
      )}
    </form>
  );
};

export default PaymentForm;
