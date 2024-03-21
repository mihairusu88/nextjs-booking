'use client';

import React from 'react';
import { OrderStatus } from '@/app/lib/constants/orders';

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

const OrderStatusBadge: React.FC<OrderStatusBadgeProps> = ({ status }) => {
  return (
    <>
      {status === OrderStatus.pending && (
        <span className="badge bg-warning text-base-100 p-4 text-xs font-medium">{status}</span>
      )}
      {status === OrderStatus.succeeded && (
        <span className="badge bg-success text-base-100 p-4 text-xs font-medium">{status}</span>
      )}
      {status === OrderStatus.incomplete && (
        <span className="badge bg-base-100/10 text-base-100 p-4 text-xs font-medium">{status}</span>
      )}
    </>
  );
};

export default OrderStatusBadge;
