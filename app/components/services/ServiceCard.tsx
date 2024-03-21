'use client';

import '@/app/styles/service-card.css';
import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  routeUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, routeUrl = '#' }) => {
  return (
    <Link
      href={routeUrl}
      className="service-card group relative flex flex-col items-center rounded-badge p-[2px] hover:scale-[1.05] transition-all duration-200"
    >
      <div className="flex flex-col items-center flex-grow w-full bg-white rounded-badge py-12 px-2 z-10">
        <div className="relative">
          <div className="service-card__icon-background rounded-[50%] w-[70px] h-[70px] opacity-15"></div>
          <div className="service-card__icon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {icon}
          </div>
        </div>
        <h5 className="mt-3 text-sm">{title}</h5>
      </div>
      <div className="overlay absolute inset-0 rounded-badge z-[1] opacity-60 blur-[5px] group-hover:opacity-100"></div>
    </Link>
  );
};

export default ServiceCard;
