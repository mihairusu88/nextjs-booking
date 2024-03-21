'use client';

import React, { useCallback, useState, useTransition } from 'react';
import PopularServicesPersonCard from './PopularServicesPersonCard';
import EmptyState from '@/app/components/misc/EmptyState';
import { servicePersonExtended } from '@/app/lib/interfaces/service';
import { category } from '@prisma/client';
import PopularServicesFilter from '@/app/components/services/PopularServicesFilter';
import apiService from '@/app/lib/services/apiService';
import toast from 'react-hot-toast';
import Loading from '../misc/Loading';

interface PopularServicesProps {
  services: servicePersonExtended[];
  categories: category[];
}

const PopularServices: React.FC<PopularServicesProps> = ({ services, categories }) => {
  const [serviceItems, setServiceItems] = useState<servicePersonExtended[]>(services);
  const [isPending, startTransition] = useTransition();

  const onFilterByCategory = useCallback(async (categoryId: number) => {
    startTransition(async () => {
      const response = await apiService.services.get({ limit: 9, categoryId });
      if (response.success) {
        setServiceItems(response.data);
      } else {
        toast.error(response.data.message);
      }
    });
  }, []);

  return (
    <>
      <PopularServicesFilter categories={categories} onFilterByCategory={onFilterByCategory} />
      <div className="popular-services flex flex-col">
        {isPending && <Loading size="large" className="mx-auto flex justify-center text-primary min-h-[200px]" />}
        {serviceItems.length > 0 && !isPending && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {serviceItems.map((item: servicePersonExtended) => (
              <PopularServicesPersonCard key={item.id} item={item} />
            ))}
          </div>
        )}
        {!serviceItems.length && !isPending && <EmptyState description="No services found." />}
      </div>
    </>
  );
};

export default PopularServices;
