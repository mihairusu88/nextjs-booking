'use client';

import React, { useContext, useMemo } from 'react';
import { CleaningModalContext } from '@/app/lib/utils/contextUtils';
import { Elements } from '@stripe/react-stripe-js';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import PaymentForm from '@/app/components/payment/PaymentForm';
import OrderSummary from '@/app/components/order/OrderSummary';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CleaningModalStep4 = () => {
  const { state } = useContext(CleaningModalContext);
  const options = useMemo(
    () =>
      ({
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#c026d3',
            colorText: '#26262b',
            spacingUnit: '5px',
            borderRadius: '1.9rem',
          },
          rules: {
            '.Input': {
              border: '1px solid #c026d3',
              fontSize: '14px',
            },
            '.Input:focus': {
              outline: '2px solid #c026d3',
              outlineOffset: '2px',
              boxShadow: 'none',
            },
            '.Label': {
              marginBottom: '10px',
            },
            '.Tab--selected': {
              borderWidth: '3px',
              boxShadow: 'none',
            },
            '.Tab--selected:focus': {
              boxShadow: 'none',
            },
          },
        },
        mode: 'payment',
        amount: state.totalPrice,
        currency: 'usd',
      }) as StripeElementsOptions,
    [state.totalPrice],
  );

  return (
    <div className="cleaning-modal-step-4 flex flex-col w-full h-full gap-4 mt-2">
      <Elements options={options} stripe={stripePromise}>
        <details
          className="collapse collapse-arrow bg-white shadow-sm rounded-badge flex justify-between items-center w-full"
          open
        >
          <summary className="collapse-title text-base-100 font-semibold">Summary</summary>
          <div className="collapse-content">
            <OrderSummary />
          </div>
        </details>
        <details className="collapse collapse-arrow bg-white shadow-sm rounded-badge flex justify-between items-center w-full">
          <summary className="collapse-title text-base-100 font-semibold">Payment Details</summary>
          <div className="collapse-content">
            <PaymentForm />
          </div>
        </details>
      </Elements>
    </div>
  );
};

export default CleaningModalStep4;
