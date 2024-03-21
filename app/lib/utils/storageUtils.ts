export const checkOrderNonce = (nonce: string = '', orderUuid: string) => {
  if (nonce) {
    const storageNonce = localStorage.getItem(`${orderUuid}_nonce`);

    if (storageNonce === nonce) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const removeOrderNonce = (orderUuid: string) => {
  localStorage.removeItem(`${orderUuid}_nonce`);
};

export const setOrderNonce = (orderUuid: string) => {
  const nonce = crypto.randomUUID();
  localStorage.setItem(`${orderUuid}_nonce`, nonce);

  return nonce;
};

export const setAddressLocation = (location: string = '') => {
  localStorage.setItem(`${window.location.origin}_location`, location);

  return location;
};

export const getAddressLocation = () => {
  return localStorage.getItem(`${window.location.origin}_location`);
};
