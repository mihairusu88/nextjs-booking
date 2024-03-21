import React from 'react';
import UpdatePasswordForm from '@/app/components/user/UpdatePasswordForm';
import { redirect } from 'next/navigation';
import { getUser } from '@/app/lib/utils/authUtils';

export const metadata = {
  title: 'HomeServices - Update Password',
  description: 'HomeServices update password description',
  keywords: 'next, next.js, react, app, booking',
};
const UpdatePassword = async ({ searchParams }: { searchParams: { code: string } }) => {
  const user = await getUser();

  if (user && searchParams.code) {
    redirect('/update-password');
  }

  if (!user && !searchParams.code) {
    redirect('/');
  }

  return (
    <div className="update-password flex flex-col items-center justify-center w-full gap-4 py-8">
      <UpdatePasswordForm code={searchParams.code} user={user} />
    </div>
  );
};

export default UpdatePassword;
