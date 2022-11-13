import Link from 'next/link';
import { useRouter } from 'next/router';

function EmptySection({ type, href }: { type: string; href: string }) {
  return (
    <div className="mt-5 border-gray-300 border border-dashed rounded-xl">
      <Link href={href}>
        <a className="flex justify-center items-center h-12 text-gray-400">
          {`+ add ${type}`}
        </a>
      </Link>
    </div>
  );
}

export default EmptySection;
