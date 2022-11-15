import { usePathname } from 'next/navigation';
import { classNames } from '../utils/classNames';
import { navigation } from '../utils/navigation';
import NavLink from './atoms/NavLink';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            href={item.href}
            value={item.name}
            classNames={classNames(
              pathname === item.href
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
            )}
          />
        ))}
      </div>
    </nav>
  );
}
