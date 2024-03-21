import { servicePersonExtended } from '@/app/lib/interfaces/service';

interface CleaningState {
  person: servicePersonExtended;
  step: number;
  services: Record<string, any>[];
  totalPrice: number;
  date: Date;
  time: string;
  promoCode: string;
  location: Record<string, any>;
  proceedCheckout: boolean;
  isPaymentInformationComplete: boolean;
  isPaymentEmailAddressComplete: boolean;
  user: Record<string, any> | null;
}

interface Action {
  type: string;
  payload?: any;
}

export const cleaningReducer = (state: CleaningState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'setServiceQuantity':
      return {
        ...state,
        services: state.services.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: payload.quantity,
            };
          }
          return item;
        }),
      };
    case 'setTotalPrice':
      return {
        ...state,
        totalPrice: payload,
      };
    case 'incrementStep':
      if (state.step < 4) {
        return {
          ...state,
          step: state.step + 1,
        };
      }

      return {
        ...state,
      };
    case 'decrementStep':
      if (state.step > 1) {
        return {
          ...state,
          step: state.step - 1,
        };
      }

      return {
        ...state,
      };
    case 'setDate':
      return {
        ...state,
        date: payload,
      };
    case 'setTime':
      return {
        ...state,
        time: payload,
      };
    case 'setPromoCode':
      return {
        ...state,
        promoCode: payload,
      };
    case 'setLocation':
      return {
        ...state,
        location: payload,
      };
    case 'setProceedCheckout':
      return {
        ...state,
        proceedCheckout: payload,
      };
    case 'setIsLoading':
      return {
        ...state,
        isLoading: payload,
      };
    case 'setIsPaymentInformationComplete':
      return {
        ...state,
        isPaymentInformationComplete: payload,
      };
    case 'setIsPaymentEmailAddressComplete':
      return {
        ...state,
        isPaymentEmailAddressComplete: payload,
      };
    default:
      return state;
  }
};
