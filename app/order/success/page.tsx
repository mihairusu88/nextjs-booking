import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import OrderSuccessDetails from '@/app/components/order/OrderSuccessDetails';
import { getPaymentById } from '@/app/lib/utils/paymentUtils';
import apiService from '@/app/lib/services/apiService';
import { getSession } from '@/app/lib/utils/authUtils';
import { redirect } from 'next/navigation';
import Loading from '@/app/components/misc/Loading';

export const metadata: Metadata = {
  title: 'HomeServices - Order Successfuly',
  description: 'HomeServices details description',
  keywords: 'next, next.js, react, app, booking',
};

const OrderSuccess = async ({ searchParams }: { searchParams: { orderId: string; nonce: string } }) => {
  const session = await getSession();

  if (!session) {
    redirect('/');
  }

  let order = null;
  const responseOrder = await apiService.orders.getOrderDetails({
    id: searchParams.orderId,
    token: session?.access_token,
  });
  const responseStripeOrder = await getPaymentById(responseOrder.data.paymentIntentId);

  if (!responseOrder.success || !responseStripeOrder.success) {
    redirect('/');
  }

  if (responseOrder.success) {
    order = {
      details: responseOrder.data,
    };
  }

  if (responseStripeOrder.success) {
    order = {
      ...order,
      stripe: responseStripeOrder.data,
    };
  }

  return (
    <div className="order-success flex flex-col w-full">
      <div className="container mx-auto flex flex-col justify-center flex-grow">
        <Suspense
          fallback={
            <Loading
              size="large"
              classNameContainer="flex justify-center items-center my-0 mx-auto"
              className="text-primary"
            />
          }
        >
          <OrderSuccessDetails order={JSON.stringify(order)} nonce={searchParams.nonce} />
        </Suspense>
      </div>
    </div>
  );
};

export default OrderSuccess;
