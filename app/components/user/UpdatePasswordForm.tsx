'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { MdKey } from 'react-icons/md';
import { RiUserSearchLine } from 'react-icons/ri';
import { resetPassword, updatePassword } from '@/app/lib/utils/authUtils';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

interface UpdatePasswordFormProps {
  code: string;
  user: Record<string, any> | null;
}

type Inputs = {
  password: string;
  confirmPassword: string;
};

const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({ code, user }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<Inputs>();

  const passwordValidationSchema = {
    required: 'Password is required.',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
    validate: (val: string) => {
      trigger('confirmPassword');
      return true;
    },
  };

  const confirmPasswordValidationSchema = {
    required: 'Confirm Password is required.',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
    validate: (val: string) => {
      if (watch('password') != val) {
        return 'Your passwords do no match';
      }
    },
  };

  const submitForm: SubmitHandler<Inputs> = (data) => {
    if (isPending) return;

    startTransition(async () => {
      toast.remove();
      let response = { data: null, error: null };
      if (!user) {
        response = JSON.parse(await resetPassword(data, code));
      } else {
        response = JSON.parse(await updatePassword(data)) as any;
      }

      if (response.error) {
        toast.error((response.error as any).message, { duration: Infinity });
      } else {
        router.push('/');
        toast.success(`Successfully changed password.`);
      }
    });
  };

  return (
    <>
      <div className="flex items-center justify-center p-6 border-[3px] border-solid border-primary/15 rounded-full">
        <RiUserSearchLine className="w-[80px] h-[80px] text-primary" />
      </div>
      <div className="flex flex-col item-center justify-center gap-4 w-[90%] sm:w-[500px] bg-white p-14 rounded-badge shadow-md border-[1px] border-solid border-gray-200">
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col w-full gap-4" autoComplete="off">
          <div className="flex flex-col w-full gap-2">
            <label className="input input-bordered input-primary input-md w-full max-w-full flex rounded-badge items-center gap-2">
              <MdKey />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                {...register('password', passwordValidationSchema)}
              />
            </label>
            {errors.password && <p className="text-xs text-error">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="input input-bordered input-primary input-md w-full max-w-full flex rounded-badge items-center gap-2">
              <MdKey />
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
                {...register('confirmPassword', confirmPasswordValidationSchema)}
              />
            </label>
            {errors.confirmPassword && <p className="text-xs text-error">{errors.confirmPassword.message}</p>}
          </div>
          <button className="btn btn-primary font-normal" type="submit">
            {isPending && <span className="loading loading-spinner"></span>}
            {!user ? 'Change Password' : 'Update Password'}
          </button>
        </form>
        {!user && (
          <p className="text-xs mx-auto">
            Back to
            <Link className="link text-primary ml-1" href="/login">
              Login
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default UpdatePasswordForm;
