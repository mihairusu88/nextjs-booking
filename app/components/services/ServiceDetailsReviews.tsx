'use client';

import React from 'react';
import { stars } from '@/app/lib/data';
import { FaStar } from 'react-icons/fa';
import ReviewCard from './ReviewCard';
import EmptyState from '@/app/components/misc/EmptyState';
import { reviewExtended } from '@/app/lib/interfaces/service';

interface ServiceDetailsReviewsProps {
  reviews: reviewExtended[];
}

const ServiceDetailsReviews: React.FC<ServiceDetailsReviewsProps> = ({ reviews }) => {
  return (
    <div className="service-details-reviews flex flex-col px-4">
      {reviews.length > 0 && (
        <>
          <div className="service-details-reviews__filter flex flex-wrap gap-2 mb-4 justify-center">
            <button className="btn btn-primary btn-outline btn-sm rounded-badge">All</button>
            {stars.map((star) => (
              <button key={star.id} className="btn btn-primary btn-outline btn-sm rounded-badge">
                <FaStar />
                {star.value}
              </button>
            ))}
          </div>
          <div className="service-details-reviews__list flex flex-wrap gap-4 mb-4 justify-center">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </>
      )}
      {reviews.length === 0 && <EmptyState className="mb-4" description="No reviews found." />}
    </div>
  );
};

export default ServiceDetailsReviews;
