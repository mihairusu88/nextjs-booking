'use client';

import React, { useMemo } from 'react';

interface ReviewsProps {
  reviews: number;
  className?: string;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews = 0, className = '' }) => {
  const reviewsValue = useMemo(() => {
    return Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(reviews);
  }, [reviews]);

  return <div className={`text-xs text-gray-600 ${className}`}>{reviewsValue}</div>;
};

export default Reviews;
