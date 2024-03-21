import React from 'react';
import LoginForm from '@/app/components/user/LoginForm';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUser } from '@/app/lib/utils/authUtils';

export const metadata = {
  title: 'HomeServices - Login',
  description: 'HomeServices login description',
  keywords: 'next, next.js, react, app, booking',
};

const Login = async () => {
  const headersList = headers();
  const referer = headersList.get('referer');

  const user = await getUser();

  if (user) {
    redirect('/');
  }

  return (
    <div className="login flex flex-col items-center justify-center w-full gap-4 py-8">
      <LoginForm referer={referer} />
    </div>
  );
};

export default Login;
