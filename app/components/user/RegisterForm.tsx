'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { MdKey } from 'react-icons/md';
import { RiUserAddLine } from 'react-icons/ri';
import { register as registerUser } from '@/app/lib/utils/authUtils';
import { FaUserPen } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<Inputs>();

  const firstNameValidationSchema = {
    required: 'First Name is required.',
  };

  const lastNameValidationSchema = {
    required: 'Last Name is required.',
  };

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
      let response = (await registerUser(data)) as any;
      response = JSON.parse(response);

      if (response.error) {
        toast.error(response.error.message, { duration: Infinity });
        return;
      }

      router.push('/login');
      toast.success(`Successfully registered user.`);
    });
  };

  return (
    <>
      <div className="flex items-center justify-center p-6 border-[3px] border-solid border-primary/15 rounded-full">
        <RiUserAddLine className="w-[80px] h-[80px] text-primary" />
      </div>
      <div className="flex flex-col item-center justify-center gap-4 w-[90%] sm:w-[500px] bg-white p-14 rounded-badge shadow-md border-[1px] border-solid border-gray-200">
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col w-full gap-4" autoComplete="off">
          <div className="flex flex-col w-full gap-2">
            <label className="input input-bordered input-primary input-md w-full max-w-full flex rounded-badge items-center gap-2">
              <FaUserPen />
              <input
                type="text"
                className="grow"
                placeholder="First Name"
                {...register('firstName', firstNameValidationSchema)}
              />
            </label>
            {errors.firstName && <p className="text-xs text-error">{errors.firstName.message}</p>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="input input-bordered input-primary input-md w-full max-w-full flex rounded-badge items-center gap-2">
              <FaUserPen />
              <input
                type="text"
                className="grow"
                placeholder="Last Name"
                {...register('lastName', lastNameValidationSchema)}
              />
            </label>
            {errors.lastName && <p className="text-xs text-error">{errors.lastName.message}</p>}
          </div>
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
            Register
          </button>
        </form>
        <p className="text-xs mx-auto">
          Already have an account?
          <Link className="link text-primary ml-1" href="/login">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
