'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { RiUserSearchLine } from 'react-icons/ri';
import { forgotPassword } from '@/app/lib/utils/authUtils';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
};

const ForgotPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const emailValidationSchema = {
    required: 'Email is required.',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  };

  const submitForm: SubmitHandler<Inputs> = (data) => {
    if (isPending) return;

    startTransition(async () => {
      toast.remove();
      let response = (await forgotPassword(data)) as any;
      response = JSON.parse(response);

      if (response.error) {
        toast.error(response.error.message, { duration: Infinity });
        return;
      }

      toast.success(`An email has been sent to your email address with a link to reset your password.`, {
        duration: Infinity,
      });
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
              <MdEmail />
              <input type="text" className="grow" placeholder="Email" {...register('email', emailValidationSchema)} />
            </label>
            {errors.email && <p className="text-xs text-error">{errors.email.message}</p>}
          </div>
          <button className="btn btn-primary font-normal" type="submit">
            {isPending && <span className="loading loading-spinner"></span>}
            Reset Password
          </button>
        </form>
        <p className="text-xs mx-auto">
          Back to
          <Link className="link text-primary ml-1" href="/login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
