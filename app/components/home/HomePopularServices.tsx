import React, { Suspense } from 'react';
import PopularServices from '../services/PopularServices';
import Loading from '@/app/components/misc/Loading';
import apiService from '@/app/lib/services/apiService';

interface HomePopularServices {
  title: string;
}

const HomePopularServices: React.FC<HomePopularServices> = async ({ title }) => {
  let services = [];
  let categories = [];

  const responseServices = await apiService.services.get({ limit: 9 });
  if (responseServices.success) {
    services = responseServices.data;
  }

  const responseCategories = await apiService.categories.get();
  if (responseCategories.success) {
    categories = responseCategories.data;
  }

  return (
    <div className="home-popular-services py-4 px-4 sm:py-8">
      <h2 className="text-center font-semibold mb-8 text-xl">{title}</h2>
      <Suspense fallback={<Loading size="large" className="my-0 mx-auto flex justify-center text-primary" />}>
        <PopularServices services={services} categories={categories} />
      </Suspense>
    </div>
  );
};

export default HomePopularServices;
