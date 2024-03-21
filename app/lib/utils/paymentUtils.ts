import Stripe from 'stripe';
import { StripeElements, Stripe as IStripe } from '@stripe/stripe-js';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

export const createPaymentIntent = async (amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(amount) * 100,
    currency: 'usd',
    description: 'Payment Intent',
  });

  return paymentIntent;
};

export const getPaymentById = async (paymentId = '') => {
  try {
    const response = await stripe.paymentIntents.retrieve(paymentId);
    const responsePaymentMethod = await stripe.paymentMethods.retrieve((response as any).payment_method);

    return {
      success: true,
      data: {
        ...response,
        paymentMethodDetails: responsePaymentMethod,
      },
    };
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};

export const confirmPayment = async (
  stripe: IStripe | null,
  elements: StripeElements,
  clientSecret: string,
  orderUuid: string,
  nonce: string,
) => {
  const origin = window.location.origin;
  const response = await stripe?.confirmPayment({
    elements,
    clientSecret: clientSecret,
    confirmParams: {
      return_url: `${origin}/order/success?orderId=${orderUuid}&nonce=${nonce}`,
    },
  });

  if (response?.error) {
    return {
      success: false,
      data: response.error,
    };
  }

  return {
    success: true,
    data: response,
  };
};
