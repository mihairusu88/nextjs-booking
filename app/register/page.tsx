import React from 'react';
import RegisterForm from '@/app/components/user/RegisterForm';
import { redirect } from 'next/navigation';
import { getUser } from '@/app/lib/utils/authUtils';

export const metadata = {
  title: 'HomeServices - Register',
  description: 'HomeServices register description',
  keywords: 'next, next.js, react, app, booking',
};

const Register = async () => {
  const user = await getUser();

  if (user) {
    redirect('/');
  }

  return (
    <div className="register flex flex-col items-center justify-center w-full gap-4 py-8">
      <RegisterForm />
    </div>
  );
};

export default Register;
