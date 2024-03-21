'use client';

import '@/app/styles/rating.css';
import React from 'react';

interface RatingProps {
  rating: number;
  className?: string;
}
const Rating: React.FC<RatingProps> = ({ rating = 0, className = '' }) => {
  return (
    <div className={`rating rating-sm flex items-center gap-2 ${className}`}>
      <div className="flex rating-stars relative">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" disabled />
      </div>
      <span className="text-xs">{rating}</span>
    </div>
  );
};

export default Rating;
