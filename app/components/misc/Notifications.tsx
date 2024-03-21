'use client';

import React from 'react';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { MdClose } from 'react-icons/md';
import { MdError } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';

const Notifications = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={6}
      containerClassName="flex flex-col justify-end !z-[10000]"
      toastOptions={{
        className: '!p-0 !rounded-lg !max-w-[100%]',
        duration: 5000,
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ message }) => (
            <div
              className={`flex flex-grow flex-wrap items-center py-3 pl-3 pr-2 rounded-lg border-[1px] border-solid ${t.type === 'success' ? 'border-success' : 'border-error'}`}
            >
              {t.type === 'success' && <MdCheckCircle className="w-6 h-6 text-success" />}
              {t.type === 'error' && <MdError className="w-6 h-6 text-error" />}
              <div className="text-sm text-base-100">{message}</div>
              {t.type !== 'loading' && (
                <button
                  className="btn btn-xs btn-ghost btn-white btn-circle ml-[20px]"
                  onClick={() => toast.dismiss(t.id)}
                >
                  <MdClose className="w-4 h-4 text-base-100" />
                </button>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default Notifications;
