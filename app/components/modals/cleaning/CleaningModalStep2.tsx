'use client';

import React, { useCallback, useContext } from 'react';
import Calendar from '@/app/components/date/Calendar';
import { CleaningModalContext } from '@/app/lib/utils/contextUtils';
import { startTime } from '@/app/lib/data';
import { format } from 'date-fns';

const CleaningModalStep2 = () => {
  const { state, dispatch } = useContext(CleaningModalContext);
  const onDateChange = useCallback(
    (value: any) => {
      dispatch({
        type: 'setDate',
        payload: format(value as Date, 'yyyy-MM-dd'),
      });
    },
    [dispatch],
  );

  const onSelectTime = useCallback(
    (value: string, e: React.MouseEvent<HTMLButtonElement>) => {
      dispatch({
        type: 'setTime',
        payload: value,
      });
    },
    [dispatch],
  );

  const onInputPromoCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'setPromoCode',
      payload: e.target.value,
    });
  };

  return (
    <div className="cleaning-modal-step-2 flex flex-col w-full h-full gap-4">
      <p className="text-md text-base-100 font-semibold my-2">Select Date</p>
      <Calendar onChange={onDateChange} defaultValue={new Date(state.date)} />
      <p className="text-md text-base-100 font-semibold my-2">Choose Start Time</p>
      <div className="start-time-filter flex flex-wrap gap-2 mb-4 justify-center">
        {startTime.map((time) => (
          <button
            key={time.id}
            className={`btn btn-primary btn-outline btn-sm rounded-badge ${
              time.value === state.time ? 'btn-active' : ''
            }`}
            onClick={(e) => onSelectTime(time.value, e)}
          >
            {time.value}
          </button>
        ))}
      </div>
      <p className="text-md text-base-100 font-semibold my-2">Promo Code</p>
      <input
        type="text"
        placeholder="Enter your promo code"
        className="input input-bordered min-h-[48px] input-primary input-md w-full max-w-full rounded-badge"
        value={state.promoCode}
        onInput={onInputPromoCode}
      />
    </div>
  );
};

export default CleaningModalStep2;
