'use client';

import React, { useEffect, useMemo, useReducer } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import CleaningModalStep1 from './CleaningModalStep1';
import CleaningModalStep2 from './CleaningModalStep2';
import CleaningModalStep3 from './CleaningModalStep3';
import CleaningModalStep4 from './CleaningModalStep4';
import { cleaningServices } from '@/app/lib/data';
import { formatPrice } from '@/app/lib/utils/priceUtils';
import { CleaningModalContext } from '@/app/lib/utils/contextUtils';
import { cleaningReducer } from '@/app/lib/utils/reducerUtils';
import { format } from 'date-fns';
import { servicePersonExtended } from '@/app/lib/interfaces/service';
import logService from '@/app/lib/services/logService';

interface CleaningModalProps {
  person: servicePersonExtended;
  user: Record<string, any> | null;
  onClose?: () => void;
}

const CleaningModal: React.FC<CleaningModalProps> = ({ person, user, onClose = () => {} }) => {
  const [state, dispatch] = useReducer(cleaningReducer, {
    person: person,
    step: 1,
    services: cleaningServices.map((item) => ({ ...item, quantity: 0 })),
    totalPrice: 0,
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '09:00 AM',
    promoCode: '',
    location: {
      value: '',
      latitude: 0,
      longitude: 0,
    },
    isPaymentInformationComplete: false,
    isPaymentEmailAddressComplete: false,
    proceedCheckout: false,
    user: user,
  });

  const contextValue = useMemo(
    () => ({
      person,
      state,
      dispatch,
    }),
    [person, state],
  );

  const isDisabledNextButton = useMemo(() => {
    return (
      state.totalPrice === 0 ||
      (state.location.value === '' && state.step === 3) ||
      state.proceedCheckout ||
      ((!state.isPaymentInformationComplete || !state.isPaymentEmailAddressComplete) && state.step === 4)
    );
  }, [
    state.isPaymentEmailAddressComplete,
    state.isPaymentInformationComplete,
    state.location.value,
    state.proceedCheckout,
    state.step,
    state.totalPrice,
  ]);

  const isDisabledBackButton = useMemo(() => {
    return state.proceedCheckout;
  }, [state.proceedCheckout]);

  const preventCloseOnEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
    }
  };

  const onClickNextButton = () => {
    if (state.step < 4) {
      dispatch({ type: 'incrementStep' });
    } else {
      dispatch({ type: 'setProceedCheckout', payload: true });
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', preventCloseOnEscape, true);

    return () => {
      document.removeEventListener('keydown', preventCloseOnEscape, true);
    };
  }, []);

  useEffect(() => {
    logService.log('updated state', state);
  }, [state]);

  return (
    <dialog className="house-cleaning-modal modal" onClose={onClose}>
      <div className="modal-box flex flex-col w-[750px] max-w-[90vw] p-0 bg-gray-100 overflow-hidden">
        <div className="modal-header flex justify-between p-4 border-b-[1px] border-solid border-gray-200">
          <h2 className="text-lg font-semibold text-base-100">House Cleaning</h2>
          <button className="btn btn-sm btn-circle bg-base-100/10" onClick={onClose}>
            <MdOutlineClose className="w-[16px]" />
          </button>
        </div>
        <div className="modal-body flex w-full h-full overflow-auto py-2 mb-2 px-4">
          <CleaningModalContext.Provider value={contextValue}>
            {state.step === 1 && <CleaningModalStep1 />}
            {state.step === 2 && <CleaningModalStep2 />}
            {state.step === 3 && <CleaningModalStep3 />}
            {state.step === 4 && <CleaningModalStep4 />}
          </CleaningModalContext.Provider>
        </div>
        <div className="modal-action py-2 px-4 m-0 border-t-[1px] border-solid border-gray-200">
          {state.step > 1 && (
            <button
              className="btn bg-primary/10 font-normal text-primary hover:bg-primary/25 hover:border-primary/5 mr-auto"
              onClick={() => dispatch({ type: 'decrementStep' })}
              disabled={isDisabledBackButton}
            >
              Back
            </button>
          )}
          <button className="btn btn-primary ml-auto" onClick={onClickNextButton} disabled={isDisabledNextButton}>
            {state.step < 4 ? `Continue - ${formatPrice(state.totalPrice)}` : 'Confirm Payment'}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CleaningModal;
