'use client';

import React from 'react';
import EmptyState from '@/app/components/misc/EmptyState';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full my-0 mx-auto gap-4">
      <EmptyState size="large" description="Something went wrong...">
        <h1 className="text-3xl font-semibold">Ooops!</h1>
      </EmptyState>
      <div className="flex justify-center gap-2">
        <button
          className="btn bg-primary/10 font-normal text-primary hover:bg-primary/25 hover:border-primary/5"
          onClick={() => router.push('/')}
        >
          Back To Home
        </button>
        <button className="btn btn-primary font-normal" onClick={() => window.location.reload()}>
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
