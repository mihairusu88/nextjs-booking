'use client';

import React, { useCallback, useEffect, useState } from 'react';
import CleaningModal from '@/app/components/modals/cleaning/CleaningModal';
import { ServiceCategory } from '@/app/lib/constants/service';
import { servicePersonExtended } from '@/app/lib/interfaces/service';
import { useRouter } from 'next/navigation';
import logService from '@/app/lib/services/logService';

interface ServiceDetailsActionButtonsProps {
  person: servicePersonExtended;
  user: Record<string, any> | null;
}

const ServiceDetailsActionButtons: React.FC<ServiceDetailsActionButtonsProps> = ({ person, user }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const router = useRouter();

  const showModal = useCallback(() => {
    const category = person.category.title?.toLowerCase();
    const modalElement = document.querySelector(`.house-${category}-modal`) as HTMLDialogElement;
    if (modalElement) {
      modalElement.showModal();
      return;
    }

    console.error(`${person.category.title} modal not found.`);
  }, [person.category.title]);

  const onBookNow = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!user) {
        router.push('/login');
        return;
      }

      setActiveModal(person.category.title);
    },
    [person.category.title, router, user],
  );

  const onWriteAReview = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!user) {
        router.push('/login');
        return;
      }

      logService.log('Write a review');
    },
    [router, user],
  );

  const onCloseModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  useEffect(() => {
    if (activeModal) {
      showModal();
    }
  }, [activeModal, showModal]);

  return (
    <div className="service-details-action-buttons fixed bottom-0 left-0 w-full rounded-t-badge bg-white flex justify-center gap-2 py-4 border-t-[1px] border-solid border-gray-200 sm:py-8">
      <button
        className="btn bg-primary/10 font-normal text-primary hover:bg-primary/25 hover:border-primary/5"
        onClick={onWriteAReview}
      >
        Write a Review
      </button>
      <button className="btn btn-primary font-normal" onClick={onBookNow}>
        Book Now
      </button>
      {activeModal === ServiceCategory.cleaning && <CleaningModal person={person} onClose={onCloseModal} user={user} />}
    </div>
  );
};

export default ServiceDetailsActionButtons;
