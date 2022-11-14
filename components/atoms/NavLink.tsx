import Link from 'next/link';

interface NavLink {
  href: string;
  value: string;
  classNames?: string;
}

function NavLink({ href, value, classNames }: NavLink) {
  return (
    <Link href={href} className={classNames}>
      {value}
    </Link>
  );
}

export default NavLink;
