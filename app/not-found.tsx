import React from 'react';
import NotFoundIcon from '@/app/assets/icons/notFound.svg';

const notFound = () => {
  return (
    <div className="not-found flex w-full">
      <div className="flex flex-col justify-center items-center w-full p-4">
        <h1 className="text-2xl font-semibold text-primary mb-2 sm:mb-4 sm:text-5xl">Ooops!</h1>
        <h3 className="text-md font-normal text-gray-500 mb-10 sm:mb-14 sm:text-lg">Something goes wrong...</h3>
        <NotFoundIcon className="w-[300px] sm:w-[500px]" />
      </div>
    </div>
  );
};

export default notFound;
