'use client';

import React, { useEffect, useState } from 'react';
import { FaSquareCheck } from 'react-icons/fa6';
import Link from 'next/link';
import Price from '@/app/components/misc/Price';
import OrderStatusBadge from '@/app/components/order/OrderStatusBadge';
import { format } from 'date-fns';
import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { FaCcPaypal } from 'react-icons/fa';
import { checkOrderNonce, removeOrderNonce } from '@/app/lib/utils/storageUtils';
import { useRouter } from 'next/navigation';
import ConfettiExplosion from '@/app/components/misc/ConfettiExplosion';

interface OrderSuccessDetailsProps {
  order: string | null;
  nonce: string | null;
}
const OrderSuccessDetails: React.FC<OrderSuccessDetailsProps> = ({ order, nonce }) => {
  const router = useRouter();
  const orderData = JSON.parse(order as string);

  const [isOrderDetailsVisibile, setIsOrderDetailsVisibile] = useState(false);
  useEffect(() => {
    const hasStorageNonce = checkOrderNonce(nonce as string, orderData?.details.uuid);
    if (hasStorageNonce) {
      setIsOrderDetailsVisibile(true);
      setTimeout(() => {
        removeOrderNonce(orderData?.details.uuid);
      }, 1000);
    } else {
      router.push('/');
    }
  }, [nonce, orderData?.details.uuid, router]);

  return (
    <>
      {isOrderDetailsVisibile && (
        <div className="order-success flex flex-col justify-center items-center py-8 gap-4 w-[750px] max-w-[90vw] mx-auto overflow-hidden">
          <ConfettiExplosion />
          <div className="flex items-center justify-center w-[100px] h-[100px] bg-primary rounded-full">
            <FaSquareCheck className="w-[30px] h-[30px] text-white" />
          </div>
          <h1 className="text-xl text-base-100 font-semibold sm:text-3xl">Booking Successful!</h1>
          <p className="text-xs text-base-100 font-normal text-center sm:text-sm">
            You have successfully made payment and book the services.
          </p>
          <details
            className="collapse collapse-arrow bg-white shadow-sm rounded-badge flex justify-between items-center w-full"
            open
          >
            <summary className="collapse-title text-base-100 font-semibold">Order Details</summary>
            <div className="collapse-content">
              <div className="order-success__summary grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-base-100">Order Id</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-base-100 text-right">{orderData?.details.uuid}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-100">Services</p>
                </div>
                <div>
                  {orderData?.details.services
                    .filter((service: any) => service.quantity > 0)
                    .map((service: any) => (
                      <div key={service.id} className="flex justify-between max-w-[100%] ml-auto sm:max-w-[40%]">
                        <p className="text-sm font-light text-base-100">
                          <span className="font-semibold">{service.quantity} x </span>
                        </p>
                        <p className="text-sm font-light text-base-100">
                          <span>{service.title}</span>
                        </p>
                      </div>
                    ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-base-100">Category</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">{orderData?.details.category.title}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-100">Person</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">{orderData?.details.servicePerson.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-100">Date & Time</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">
                    {orderData?.details.date}, {orderData?.details.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-100">Location</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">{orderData?.details.location}</p>
                </div>
                <div className="divider col-span-2 my-1"></div>
                <div>
                  <p className="text-sm font-medium text-base-100">Amount</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">
                    <Price price={orderData ? orderData.details.amount : 0} />
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-100">Payment Method</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">
                    <span className="flex items-center justify-end gap-2">
                      {orderData?.stripe.paymentMethodDetails.type === 'card' && (
                        <BsCreditCard2FrontFill className="w-6 h-6 text-primary" />
                      )}
                      {orderData?.stripe.paymentMethodDetails.type === 'paypal' && (
                        <FaCcPaypal className="w-6 h-6 text-primary" />
                      )}
                      {orderData?.stripe.paymentMethodDetails.type === 'card'
                        ? `**** ${orderData?.stripe.paymentMethodDetails.card.last4}`
                        : ''}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-base-100">Created</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">
                    {format(new Date(orderData?.details.created_at), 'yyyy-MM-dd HH:mm:ss aa')}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-base-100">Status</p>
                </div>
                <div>
                  <p className="text-sm font-light text-base-100 text-right">
                    <OrderStatusBadge status={orderData?.details.status} />
                  </p>
                </div>
              </div>
            </div>
          </details>
          <div className="flex flex-col item-center gap-2 sm:flex-row">
            <Link
              href="/"
              className="btn bg-primary/10 font-normal text-primary hover:bg-primary/25 hover:border-primary/5"
            >
              Back to Homepage
            </Link>
            <Link className="btn btn-primary font-normal" href={`/services/details/${orderData?.details.personId}`}>
              Book Again
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSuccessDetails;
