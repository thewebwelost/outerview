'use client';

import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';

import Navbar from './Navbar';
import ProfileDropdown from './ProfileDropdown';

import { navigation, userNavigation } from '../utils/navigation';
import { classNames } from '../utils/classNames';

export interface IHeader {}
export interface IUser {
  name: string;
  email: string;
  image: string;
}

const Logo: React.FC = () => (
  <div className="relative flex-shrink-0 h-8 w-8">
    <Image
      src="/images/logo_short.svg"
      alt="Workflow"
      layout="fill"
      objectFit="contain"
    />
  </div>
);

const NotificationsButton: React.FC = () => (
  <button
    type="button"
    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
  >
    <span className="sr-only">View notifications</span>
    <BellIcon className="h-6 w-6" aria-hidden="true" />
  </button>
);

const Header: React.FC<IHeader> = () => {
  const router = useRouter();
  const pathname = usePathname();

  // status "loading" | "authenticated" | "unauthenticated"
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push('/');
    },
  });

  return (
    <Disclosure as="header" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Logo />
                <Navbar />
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <NotificationsButton />
                  <ProfileDropdown user={session?.user as IUser} />
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Disclosure.Button
                    as="li"
                    className={classNames(
                      pathname === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="relative flex-shrink-0 h-10 w-10">
                  {/* <Image
                    className="rounded-full"
                    src={session?.user?.image as string}
                    alt=""
                  /> */}
                </div>

                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {/* Name: {session?.user?.name} */}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {/* Email: {session?.user?.email} */}
                  </div>
                </div>

                <button
                  type="button"
                  className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Disclosure.Button
                      as="li"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
                <Disclosure.Button
                  as="li"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Log out
                </Disclosure.Button>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
