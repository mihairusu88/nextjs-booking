import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { getUser } from '@/app/lib/utils/authUtils';
import Notifications from '@/app/components/misc/Notifications';
import prisma from '@/app/lib/utils/prisma/database';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'HomeServices',
  description: 'HomeServices description',
  keywords: 'next, next.js, react, app, booking',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  let userDetails = null;
  const user = await getUser();

  if (user) {
    userDetails = await prisma.user.findFirst({
      where: {
        uuid: user?.id,
      },
    });
  }

  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.className} flex flex-col bg-gray-100`}>
        <Notifications />
        <Header user={user} userDetails={userDetails} />
        <main className="main flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
