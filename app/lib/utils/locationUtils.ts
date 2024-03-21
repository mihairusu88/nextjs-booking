export const getCurrentLocation = (): Promise<{ success: boolean; data: any }> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(successCallback(position));
        },
        (error) => {
          reject(errorCallback(error));
        },
      );
    } else {
      reject(errorCallback(new Error('Geolocation is not supported by this browser.')));
    }
  });
};

function successCallback(position: { coords: { latitude: any; longitude: any } }) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  return {
    success: true,
    data: {
      latitude: latitude,
      longitude: longitude,
    },
  };
}

function errorCallback(error: GeolocationPositionError | Error) {
  console.error('Unable to retrieve your location');
  return {
    success: false,
    data: error.message,
  };
}
