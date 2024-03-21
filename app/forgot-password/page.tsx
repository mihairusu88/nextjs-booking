import React from 'react';
import ForgotPasswordForm from '@/app/components/user/ForgotPasswordForm';
import { redirect } from 'next/navigation';
import { getUser } from '@/app/lib/utils/authUtils';

export const metadata = {
  title: 'HomeServices - Forgot Password',
  description: 'HomeServices forgot password description',
  keywords: 'next, next.js, react, app, booking',
};
const ForgotPassword = async () => {
  const user = await getUser();

  if (user) {
    redirect('/');
  }

  return (
    <div className="forgot-password flex flex-col items-center justify-center w-full gap-4 py-8">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
