import { createClient } from '@/app/lib/utils/supabase/client';
import { Provider } from '@supabase/supabase-js';
import logService from '@/app/lib/services/logService';

export const signInWithOAuth = async (provider: Provider, redirectUrl?: string) => {
  const supabase = createClient();

  const response = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: { redirectTo: `${process.env.NEXT_PUBLIC_HOST}/auth/callback?next=${redirectUrl}` },
  });

  if (response.error) {
    logService.log('signInWithOAuth error', response.error.message);
    return response;
  }

  return response;
};

export const getUser = async () => {
  const supabase = createClient();

  const response = await supabase.auth.getUser();

  if (response.error) {
    logService.log('getUser error', response.error.message);
    return response.data.user;
  }

  return response.data.user;
};

export const getSession = async () => {
  const supabase = createClient();

  const response = await supabase.auth.getSession();

  if (response.error) {
    logService.log('getSession error', response.error.message);
    return response.data.session;
  }

  return response.data.session;
};
