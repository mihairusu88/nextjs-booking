'use client';

import React from 'react';
import Image from 'next/image';
import EmptyState from '@/app/components/misc/EmptyState';
import { personPhotos } from '@prisma/client';

interface ServiceDetailsPersonPhotosProps {
  photos: personPhotos[];
}

const ServiceDetailsPersonPhotos: React.FC<ServiceDetailsPersonPhotosProps> = ({ photos }) => {
  return (
    <div className="flex flex-col px-4 pb-4">
      <h5 className="text-md font-semibold text-base-100 mb-4 sm:text-lg">Photos</h5>
      {photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            {photos.slice(0, 3).map((photo, index) => (
              <div className={`relative w-full ${index === 0 ? 'h-[300px]' : 'h-[200px]'}`} key={photo.id}>
                <Image
                  className="absolute w-full h-full object-cover object-center rounded-badge"
                  src={photo.url as string}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {photos.slice(3, 6).map((photo, index) => (
              <div className={`relative w-full ${index <= 1 ? 'h-[200px]' : 'h-[300px]'}`} key={photo.id}>
                <Image
                  className="absolute w-full h-full object-cover object-center rounded-badge"
                  src={photo.url as string}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {photos.slice(6, 9).map((photo, index) => (
              <div className={`relative w-full ${index === 0 ? 'h-[300px]' : 'h-[200px]'}`} key={photo.id}>
                <Image
                  className="absolute w-full h-full object-cover object-center rounded-badge"
                  src={photo.url as string}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {photos.slice(9, 12).map((photo, index) => (
              <div className={`relative w-full ${index <= 1 ? 'h-[200px]' : 'h-[300px]'}`} key={photo.id}>
                <Image
                  className="absolute w-full h-full object-cover object-center rounded-badge"
                  src={photo.url as string}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {photos.length === 0 && <EmptyState description="No photos found." />}
    </div>
  );
};

export default ServiceDetailsPersonPhotos;
