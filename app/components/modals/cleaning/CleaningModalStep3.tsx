'use client';

import React, { useContext } from 'react';
import { CleaningModalContext } from '@/app/lib/utils/contextUtils';
import Map from '@/app/components/location/Map';
import AddressLocationInput from '@/app/components/location/AddressLocationInput';

const CleaningModalStep3 = () => {
  const { state, dispatch } = useContext(CleaningModalContext);
  const setLocation = (payload: any) => {
    dispatch({
      type: 'setLocation',
      payload: payload,
    });
  };

  return (
    <div className="cleaning-modal-step-3 flex flex-col w-full gap-4">
      <div className="flex w-full relative z-10">
        <Map latitude={state.location.latitude} longitude={state.location.longitude} />
      </div>
      <p className="text-md text-base-100 font-semibold my-2">Adress Location</p>
      <AddressLocationInput
        value={state.location.value}
        onChangeLocation={setLocation}
        onGetCurrentLocation={setLocation}
      />
    </div>
  );
};

export default CleaningModalStep3;
