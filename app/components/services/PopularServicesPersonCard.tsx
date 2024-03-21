'use client';

import React from 'react';
import Image from 'next/image';
import Price from '../misc/Price';
import Reviews from '../misc/Reviews';
import Rating from '../misc/Rating';
import Link from 'next/link';
import { servicePersonExtended } from '@/app/lib/interfaces/service';

interface PopularServicesPersonCardProps {
  item: servicePersonExtended;
}

const PopularServicesPersonCard: React.FC<PopularServicesPersonCardProps> = ({ item }) => {
  return (
    <Link
      href={`/services/details/${item.id}`}
      className="popular-service-person-card relative group flex card card-side p-[1px] rounded-badge bg-white border-[1px] border-solid border-gray-200 shadow-md transition-all duration-200 hover:scale-[1.05] hover:border-transparent hover:bg-gradient-to-r hover:from-primary/30 hover:to-pink-500/30"
    >
      <div className="relative z-10 p-6 bg-white rounded-badge gap-6 w-full flex flex-col lg:flex-row">
        <figure className="relative w-[100%] h-[150px] rounded-badge lg:max-w-[50%] lg:w-[200px] lg:h-[150px]">
          <Image
            className="absolute w-full h-full object-cover object-center rounded-badge"
            src={item.imageUrl as string}
            alt={item.name as string}
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body p-0">
          <h5 className="my-auto text-gray-500 text-sm">{item.name}</h5>
          <div className="badge bg-primary/10 text-primary p-4 text-xs my-auto">{item.category.title}</div>
          <Price className="my-auto" price={item.price as number} />
          <div className="flex gap-4 my-auto">
            <Rating rating={item.rating as number} />
            <Reviews
              className="border-l-[1px] border-solid border-gray-300 pl-4"
              reviews={item._count.reviewMessages as number}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-badge z-[1] opacity-0 blur-sm bg-gradient-to-r from-primary/60 to-orange-500/60 group-hover:opacity-100"></div>
    </Link>
  );
};

export default PopularServicesPersonCard;
