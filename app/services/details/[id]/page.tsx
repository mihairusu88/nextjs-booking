import React from 'react';
import type { Metadata } from 'next';
import ServiceDetailsActionButtons from '@/app/components/services/ServiceDetailsActionButtons';
import ServiceDetailsPersonCard from '@/app/components/services/ServiceDetailsPersonCard';
import ServiceDetailsPersonPhotos from '@/app/components/services/ServiceDetailsPersonPhotos';
import ServiceDetailsReviews from '@/app/components/services/ServiceDetailsReviews';
import apiService from '@/app/lib/services/apiService';
import { redirect } from 'next/navigation';
import { getUser } from '@/app/lib/utils/authUtils';

export const metadata: Metadata = {
  title: 'HomeServices - Service Details',
  description: 'HomeServices details description',
  keywords: 'next, next.js, react, app, booking',
};

const ServiceDetails = async ({ params }: { params: { id: string } }) => {
  let person = null;

  const response = await apiService.services.getServiceDetails(params ? params.id : null);
  const user = await getUser();

  if (response.success) {
    person = response.data;
  }

  if (!person) {
    redirect('/not-found');
  }

  return (
    <div className="services-details flex flex-col w-full pb-[81px] sm:pb-[113px]">
      <div className="container mx-auto">
        <ServiceDetailsPersonCard person={person} />
        <div className="divider"></div>
        <ServiceDetailsPersonPhotos photos={person.photos} />
        <div className="divider"></div>
        <ServiceDetailsReviews reviews={person.reviewMessages} />
      </div>
      <ServiceDetailsActionButtons person={person} user={user} />
    </div>
  );
};

export default ServiceDetails;
