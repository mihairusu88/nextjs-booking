'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { formatDistance, subDays } from 'date-fns';
import { reviewExtended } from '@/app/lib/interfaces/service';

interface ReviewCardProps {
  review: reviewExtended;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const reviewDate = useMemo(() => {
    return formatDistance(subDays(review.created_at, 3), new Date(), { addSuffix: true });
  }, [review.created_at]);

  return (
    <div className="review-card flex flex-col w-full py-4 px-6 gap-3 bg-white shadow-sm rounded-badge">
      <div className="flex items-center">
        <div className="avatar mr-4">
          <div className="w-10 rounded-full sm:w-14">
            <Image src={review.user.imageUrl} alt="Avatar Logo" width={500} height={500} />
          </div>
        </div>
        <div className="text-base-100 text-sm font-semibold max-w-[150px] overflow-hidden text-ellipsis sm:text-md">
          {review.user.first_name} {review.user.last_name}
        </div>
        <div className="badge badge-primary badge-outline px-3 py-1 h-auto gap-2 ml-auto">
          <FaStar />
          {Math.round(review.rating as number)}
        </div>
      </div>
      <div className="flex text-xs text-gray-600 font-light sm:text-sm">{review.message}</div>
      <div className="text-xs text-neutral-400 font-light">{reviewDate}</div>
    </div>
  );
};

export default ReviewCard;
