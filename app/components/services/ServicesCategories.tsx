import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceIcon from './ServiceIcon';
import apiService from '@/app/lib/services/apiService';
import EmptyState from '@/app/components/misc/EmptyState';
import { category } from '@prisma/client';
import { ServiceCategory } from '@/app/lib/constants/service';

const ServicesCategories = async () => {
  let categories = [];
  const response = await apiService.categories.get();

  if (response.success) {
    categories = response.data;
  }

  return (
    <div className="services-categories flex flex-col">
      {categories.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((item: category) => (
            <ServiceCard
              key={item.id}
              title={item.title as string}
              icon={
                <ServiceIcon type={ServiceCategory[item.title?.toLocaleLowerCase() as keyof typeof ServiceCategory]} />
              }
              routeUrl={`/services?category=${(item.title as string).toLowerCase()}`}
            />
          ))}
        </div>
      )}
      {categories.length === 0 && <EmptyState description="No categories found." />}
    </div>
  );
};

export default ServicesCategories;
