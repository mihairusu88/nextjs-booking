'use client';

import React, { useCallback, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface ServiceIncrementCardProps {
  quantity: number;
  label: string;
  onChangeQuantity?: (quantity: number) => void;
}

const ServiceIncrementCard: React.FC<ServiceIncrementCardProps> = ({
  quantity = 0,
  label,
  onChangeQuantity = () => {},
}) => {
  const [quantityValue, setQuantityValue] = useState<number>(quantity);

  const decrementQuantity = useCallback(() => {
    if (quantityValue > 0) {
      setQuantityValue(quantityValue - 1);
      onChangeQuantity(quantityValue - 1);
    }
  }, [onChangeQuantity, quantityValue]);

  const incrementQuantity = useCallback(() => {
    setQuantityValue(quantityValue + 1);
    onChangeQuantity(quantityValue + 1);
  }, [onChangeQuantity, quantityValue]);

  return (
    <div className="service-increment-card bg-white shadow-sm rounded-badge flex justify-between items-center w-full p-4">
      <div className="text-md text-base-100 font-semibold">{label}</div>
      <div className="flex items-center gap-2">
        <button
          className="btn btn-sm btn-circle bg-primary/10 font-normal text-primary hover:bg-primary/25 hover:border-primary/5"
          onClick={decrementQuantity}
        >
          <FaMinus className="w-[16px]" />
        </button>
        <span className="text-sm text-base-100 font-normal min-w-[30px] text-center">{quantityValue}</span>
        <button
          className="btn btn-sm btn-circle bg-primary/10 font-normal text-primary hover:bg-primary/25 hover:border-primary/5"
          onClick={incrementQuantity}
        >
          <FaPlus className="w-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default ServiceIncrementCard;
