'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuUserCircle2 } from 'react-icons/lu';
import { useCallback } from 'react';
import { logout } from '@/app/lib/utils/authUtils';
import Loading from '@/app/components/misc/Loading';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

interface HeaderProps {
  user: Record<string, any> | null;
  userDetails: Record<string, any> | null;
}

const Header: React.FC<HeaderProps> = ({ user, userDetails }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const onLogout = useCallback(async () => {
    startTransition(async () => {
      await logout();
    });
  }, []);

  const onBlurMobileDropdown = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (isMobileMenuOpen) {
        if (e.relatedTarget && e.relatedTarget.classList.contains('menu-link')) {
          setTimeout(() => {
            setIsMobileMenuOpen(false);
          }, 250);

          return;
        }
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen],
  );

  const onBlurUserMenuDropdown = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (isUserMenuOpen) {
        if (e.relatedTarget && e.relatedTarget.classList.contains('user-menu-link')) {
          setTimeout(() => {
            setIsUserMenuOpen(false);
          }, 250);

          return;
        }
        setIsUserMenuOpen(false);
      }
    },
    [isUserMenuOpen],
  );

  return (
    <div className="header min-h-[65px]">
      <div className="navbar bg-base-100 px-4 py-1 fixed z-[9999] rounded-none">
        <div className="navbar-start">
          <div className="dropdown" onBlur={onBlurMobileDropdown}>
            <label
              tabIndex={0}
              className="btn btn-circle bg-base-100 border-0 btn-sm swap swap-rotate lg:hidden hover:bg-base-100 text-white"
            >
              <input type="checkbox" onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
              {isMobileMenuOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
            </label>
            {isMobileMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="menu-link text-white hover:text-primary focus:text-primary" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="menu-link text-white hover:text-primary focus:text-primary" href="/services">
                    Services
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link className="btn btn-ghost text-xl hidden lg:flex" href="/">
            <Image className="dark:invert" src="/images/logo.svg" alt="Logo" width={35} height={35} priority />
          </Link>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost text-xl lg:hidden" href="/">
            <Image className="dark:invert" src="/images/logo.svg" alt="Logo" width={35} height={35} priority />
          </Link>
          <ul className="menu menu-horizontal px-1 text-white hidden lg:flex">
            <li>
              <Link className="text-white hover:text-primary focus:text-primary" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-primary focus:text-primary" href="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && !isPending && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="relative btn btn-outline btn-circle text-white bg-white  border-white m-1 hover:bg-white hover:text-base-100 hover:border-white"
                onBlur={onBlurUserMenuDropdown}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                {userDetails && (
                  <div className="avatar flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full overflow-hidden">
                    {userDetails.imageUrl && (
                      <Image width={100} height={100} src={userDetails?.imageUrl} alt="User avatar" />
                    )}
                    {!userDetails.imageUrl && <LuUserCircle2 className="w-6 h-6 text-base-100" />}
                  </div>
                )}
                {!userDetails && <LuUserCircle2 />}
              </div>
              {isUserMenuOpen && (
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                  <li className="block w-full">
                    <p className="user-menu-link block text-base-100 font-semibold text-ellipsis overflow-hidden">
                      {user?.email}
                    </p>
                  </li>
                  <li>
                    <Link className="user-menu-link text-base-100 hover:text-primary" href="/user/profile">
                      User Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="user-menu-link text-base-100 hover:text-primary" href="/update-password">
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <button className="user-menu-link text-base-100 hover:text-primary" onClick={onLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
          {!user && !isPending && (
            <Link className="btn btn-primary btn-sm font-normal" href="/login">
              Sign In
            </Link>
          )}
          {isPending && <Loading size="small" className="text-primary" classNameContainer="flex" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
