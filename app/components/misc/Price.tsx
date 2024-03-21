'use client';

import React, { useMemo } from 'react';
import { formatPrice } from '@/app/lib/utils/priceUtils';

interface PriceProps {
  price: number;
  className?: string;
  size?: 'large' | 'medium' | 'small';
}

const Price: React.FC<PriceProps> = ({ price = 0, className = '', size = 'medium' }) => {
  const priceValue = useMemo(() => {
    return formatPrice(price);
  }, [price]);

  return (
    <>
      {size === 'large' && <span className={`text-4xl font-semibold text-primary ${className}`}>{priceValue}</span>}
      {size === 'medium' && <span className={`text-xl font-semibold text-primary ${className}`}>{priceValue}</span>}
      {size === 'small' && <span className={`text-lg font-semibold text-primary ${className}`}>{priceValue}</span>}
    </>
  );
};

export default Price;
