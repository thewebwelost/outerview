import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '../utils/classNames';
import { userNavigation } from '../utils/navigation';

function ProfileDropdown() {
  // TODO: hardcoded data to be removed
  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: '/user.webp',
  };

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="relative h-8 w-8 max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <Image
            className="rounded-full"
            src={user.imageUrl}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link href={item.href}>
                  <a
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ProfileDropdown;
