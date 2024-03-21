import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { getCurrentLocation } from '@/app/lib/utils/locationUtils';
import { Loader } from '@googlemaps/js-api-loader';
import { setAddressLocation, getAddressLocation } from '@/app/lib/utils/storageUtils';
import logService from '@/app/lib/services/logService';

interface AddressLocationInputProps {
  value: string;
  placeholder?: string;
  onChangeLocation?: (payload: any) => void;
  onGetCurrentLocation?: (payload: any) => void;
}

const AddressLocationInput: React.FC<AddressLocationInputProps> = ({
  value,
  placeholder = 'Enter your location',
  onChangeLocation = () => {},
  onGetCurrentLocation = () => {},
}) => {
  const [suggestions, setSuggestions] = useState<Record<string, any>[]>([]);

  const loader = useMemo(() => {
    return new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: 'weekly',
    });
  }, []);

  const getAddressSuggestions = useCallback(
    async (value: string) => {
      const { Geocoder } = await loader.importLibrary('geocoding');
      const geocoder = new Geocoder();

      return geocoder.geocode({ address: value });
    },
    [loader],
  );

  const setAddressSuggestions = useCallback(
    async (value: string) => {
      try {
        if (!value) {
          setSuggestions([]);
          return;
        }

        const suggestionsResult = await getAddressSuggestions(value);
        setSuggestions(suggestionsResult.results);
      } catch (error) {
        setSuggestions([]);
        logService.log('No results found.');
      }
    },
    [getAddressSuggestions],
  );

  const onChange = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const payload = {
        value: e.target.value,
        latitude: 0,
        longitude: 0,
      };
      onChangeLocation(payload);
      setAddressSuggestions(e.target.value);
    },
    [onChangeLocation, setAddressSuggestions],
  );

  const onFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setAddressSuggestions(e.target.value);
    },
    [setAddressSuggestions],
  );

  const onBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget && e.relatedTarget.classList.contains('suggestions-item')) {
      e.preventDefault();
      return;
    }

    setSuggestions([]);
  }, []);

  const onClickSuggestionAddress = (address: Record<string, any>) => {
    const { lat, lng } = address.geometry.location;

    const payload = {
      value: address.formatted_address,
      latitude: lat(),
      longitude: lng(),
    };

    onGetCurrentLocation(payload);
    setSuggestions([]);
  };

  const getAddressByCoordinates = useCallback(
    async (position: google.maps.LatLng) => {
      const { Geocoder } = await loader.importLibrary('geocoding');
      const geocoder = new Geocoder();

      return geocoder.geocode({ location: position });
    },
    [loader],
  );

  const onClickMarkerButton = useCallback(async () => {
    const locationResult = await getCurrentLocation();
    let address = '';

    let payload = {
      value: address,
      latitude: 0,
      longitude: 0,
    };

    if (locationResult.success) {
      const addressResult = await getAddressByCoordinates({
        lat: locationResult.data.latitude,
        lng: locationResult.data.longitude,
      } as google.maps.LatLng);

      if (addressResult.results && addressResult.results.length) {
        address = addressResult.results[0].formatted_address;
      }

      payload = {
        value: address,
        latitude: locationResult.data.latitude,
        longitude: locationResult.data.longitude,
      };

      setAddressLocation(JSON.stringify(payload));
      onGetCurrentLocation(payload);
    }
  }, [getAddressByCoordinates, onGetCurrentLocation]);

  useEffect(() => {
    const location = getAddressLocation();
    console.log('location', location);
    if (location) {
      onGetCurrentLocation(JSON.parse(location));
    }
  }, []);

  return (
    <label className="relative input input-bordered input-primary input-md w-full max-w-full flex items-center gap-2 rounded-badge">
      <input
        type="text"
        className="grow max-w-[90%] sm:max-w-full overflow-hidden text-ellipsis"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <button className="btn btn-circle btn-xs" onClick={onClickMarkerButton}>
        <FaMapMarkerAlt />
      </button>
      {suggestions.length > 0 && (
        <div className="suggestions flex flex-col absolute z-20 bottom-[100%] mb-[5px] left-0 w-full bg-white p-2 gap-2 rounded-badge border-[1px] border-solid border-gray-300">
          {suggestions.map((suggestion: any) => (
            <button
              key={suggestion.place_id}
              className="btn btn-sm suggestions-item w-full flex justify-start items-center p-2 gap-2 rounded-badge"
              onClick={() => onClickSuggestionAddress(suggestion)}
            >
              <FaMapMarkerAlt className="w-4 h-4" />
              <p className="text-xs text-base-100 font-normal">{suggestion.formatted_address}</p>
            </button>
          ))}
        </div>
      )}
    </label>
  );
};

export default AddressLocationInput;
