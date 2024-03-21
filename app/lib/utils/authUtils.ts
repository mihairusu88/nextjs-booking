'use server';

import { createClient } from '@/app/lib/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '@/app/lib/utils/prisma/database';
import { headers } from 'next/headers';

export const login = async (data: { email: string; password: string }, redirectUrl?: string) => {
  const supabase = createClient();
  const response = await supabase.auth.signInWithPassword(data);

  if (response.error) {
    return JSON.stringify(response);
  }

  revalidatePath('/', 'layout');
  redirect(redirectUrl ? redirectUrl : '/');
};

export const register = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const supabase = createClient();
  const origin = headers().get('origin');

  const isAlreadyRegistered = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (isAlreadyRegistered) {
    return JSON.stringify({
      error: {
        message: 'User with email: ' + data.email + ' already exists.',
      },
    });
  }

  const response = await supabase.auth.signUp({
    ...data,
    options: {
      emailRedirectTo: `${origin}/auth/callback?next=${origin}`,
    },
  });

  if (response.error) {
    return JSON.stringify(response);
  }

  const responseUser = await prisma.user.create({
    data: {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      uuid: response.data.user?.id,
    },
  });

  if (!responseUser) {
    return JSON.stringify(responseUser);
  }

  return JSON.stringify(response);
};

export const forgotPassword = async (data: { email: string }) => {
  const supabase = createClient();
  const origin = headers().get('origin');

  const response = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${origin}/update-password`,
  });

  if (response.error) {
    return JSON.stringify(response);
  }

  return JSON.stringify(response);
};

export const resetPassword = async (data: { password: string; confirmPassword: string }, code: string) => {
  const supabase = createClient();

  try {
    const responseExchangeCodeForSession = await supabase.auth.exchangeCodeForSession(code);

    if (responseExchangeCodeForSession.error) {
      return JSON.stringify(responseExchangeCodeForSession);
    }

    const responseUpdateUser = await supabase.auth.updateUser({
      password: data.password,
    });

    if (responseUpdateUser.error) {
      return JSON.stringify(responseUpdateUser);
    }

    return JSON.stringify(responseUpdateUser);
  } catch (error: any) {
    return JSON.stringify({
      error: {
        message: 'Invalid code used. Please check code and try again.',
        type: error.constructor.name,
      },
    });
  }
};

export const updatePassword = async (data: { password: string; confirmPassword: string }) => {
  const supabase = createClient();

  const response = await supabase.auth.updateUser({
    password: data.password,
  });

  if (response.error) {
    return JSON.stringify(response);
  }

  return JSON.stringify(response);
};

export const logout = async () => {
  const supabase = createClient();

  const response = await supabase.auth.signOut();

  if (response.error) {
    return JSON.stringify(response);
  }

  revalidatePath('/', 'layout');
  redirect('/');
};

export const getUser = async () => {
  const supabase = createClient();
  const response = await supabase.auth.getUser();

  if (response.error) {
    return response.data.user;
  }

  return response.data.user;
};

export const getSession = async () => {
  const supabase = createClient();
  const response = await supabase.auth.getSession();

  if (response.error) {
    return response.data.session;
  }

  return response.data.session;
};
