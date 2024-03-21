import React, { useContext } from 'react';
import { CleaningModalContext } from '@/app/lib/utils/contextUtils';
import Price from '@/app/components/misc/Price';

const OrderSummary = () => {
  const { state } = useContext(CleaningModalContext);

  return (
    <div className="order-summary grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm font-medium text-base-100">Services</p>
      </div>
      <div>
        {state.services
          .filter((service: any) => service.quantity > 0)
          .map((service: any) => (
            <div key={service.name} className="flex justify-between max-w-[100%] ml-auto sm:max-w-[40%]">
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
        <p className="text-sm font-light text-base-100 text-right">{state.person.category.title}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-base-100">Person</p>
      </div>
      <div>
        <p className="text-sm font-light text-base-100 text-right">{state.person.name}</p>
      </div>
      <div>
        <p className="text-sm font-medium text-base-100">Date & Time</p>
      </div>
      <div>
        <p className="text-sm font-light text-base-100 text-right">
          {state.date}, {state.time}
        </p>
      </div>
      <div>
        <p className="text-sm font-medium text-base-100">Location</p>
      </div>
      <div>
        <p className="text-sm font-light text-base-100 text-right">{state.location.value}</p>
      </div>
      <div className="divider col-span-2 my-1"></div>
      <div>
        <p className="text-sm font-medium text-base-100">Total</p>
      </div>
      <div>
        <p className="text-sm font-light text-base-100 text-right">
          <Price price={state.totalPrice} />
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
