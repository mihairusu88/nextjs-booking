const isDevMode = process.env.NODE_ENV === 'development';

const logService = {
  log: (message: any, data?: any) => {
    !isDevMode || (data ? console.log(message, data) : console.log(message));
  },
  error: (message: any, data?: any) => {
    !isDevMode || (data ? console.error(message, data) : console.error(message));
  },
  warn: (message: any, data?: any) => {
    !isDevMode || (data ? console.warn(message, data) : console.warn(message));
  },
  info: (message: any, data?: any) => {
    !isDevMode || (data ? console.info(message, data) : console.info(message));
  },
};

export default logService;
