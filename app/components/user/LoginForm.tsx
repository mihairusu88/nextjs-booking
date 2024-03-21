'use client';

import React, { useCallback, useTransition } from 'react';
import { MdEmail, MdKey } from 'react-icons/md';
import { LiaUserLockSolid } from 'react-icons/lia';
import Link from 'next/link';
import { login } from '@/app/lib/utils/authUtils';
import { signInWithOAuth } from '@/app/lib/utils/authUtilsUI';
import { FcGoogle } from 'react-icons/fc';
import { Provider } from '@supabase/supabase-js';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormProps {
  referer: string | undefined | null;
}

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ referer }) => {
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

  const passwordValidationSchema = {
    required: 'Password is required.',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
  };

  const submitForm: SubmitHandler<Inputs> = (data) => {
    if (isPending) return;

    startTransition(async () => {
      toast.remove();
      let response = (await login(data, referer ?? '/')) as any;
      response = JSON.parse(response);

      if (response.error) {
        toast.error(response.error.message, { duration: Infinity });
      }
    });
  };

  const submitWithOAuth = useCallback(
    async ({ provider }: { provider: Provider }) => {
      await signInWithOAuth(provider, referer ?? '/');
    },
    [referer],
  );

  return (
    <>
      <div className="flex items-center justify-center p-6 border-[3px] border-solid border-primary/15 rounded-full">
        <LiaUserLockSolid className="w-[80px] h-[80px] text-primary" />
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
          <button className="btn btn-primary font-normal gap-2" type="submit">
            {isPending && <span className="loading loading-spinner"></span>}
            Login
          </button>
        </form>
        <div className="divider text-sm">or continue with</div>
        <button
          className="btn btn-outline btn-md border-gray-300 hover:bg-white"
          onClick={() =>
            submitWithOAuth({
              provider: 'google',
            })
          }
          type="button"
        >
          <FcGoogle className="w-6 h-6" />
        </button>
        <div className="flex justify-between items-center mt-2">
          <Link className="link text-primary text-xs" href="/forgot-password">
            Forgot password?
          </Link>
          <p className="text-xs">
            Don`t have an account?
            <Link className="link text-primary ml-1" href="/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
