import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../utils/classNames';
import { navigation } from '../utils/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="hidden md:block">
      <ul className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <li
              className={classNames(
                router.pathname === item.href
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
              )}
              aria-current={router.pathname === item.href ? 'page' : undefined}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
