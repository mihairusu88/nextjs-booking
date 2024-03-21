'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Image from 'next/image';

interface MapProps {
  latitude?: number;
  longitude?: number;
}

const Map: React.FC<MapProps> = ({ latitude = 0, longitude = 0 }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

      const position = {
        lat: latitude,
        lng: longitude,
      };

      const mapOptions = {
        center: position,
        zoom: 15,
        mapId: 'SERVICE_DETAILS_MAP_ID',
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      new Marker({ position, map });
    };

    if (latitude > 0 && longitude > 0) {
      initMap();
      setIsLoaded(true);
    }
  }, [latitude, longitude]);

  return (
    <>
      {!isLoaded && (
        <div className="absolute w-full flex flex-grow -mt-2 -mx-4 h-[300px] sm:h-[400px] z-20">
          <Image
            className="absolute w-full h-full object-cover object-center"
            src="/images/map-placeholder.jpg"
            alt="Map Placeholder"
            width={500}
            height={500}
          />
        </div>
      )}
      <div className="relative flex flex-grow -mt-2 -mx-4 h-[300px] sm:h-[400px] z-10" ref={mapRef}></div>
    </>
  );
};

export default Map;
