import Link from 'next/link';
import React from 'react';

interface IPanel {
  children: any;
  heading: string;
  btnCopy: string;
  btnHref: string;
}

const Panel: React.FC<IPanel> = ({ children, heading, btnCopy, btnHref }) => {
  return (
    <section className={'mt-5'}>
      <header className="flex items-center justify-between mb-3">
        <h2 className="text-m text-gray-400 font-light">{heading}</h2>
        <Link
          href={btnHref}
          className={
            'block p-2 rounded-full capitalize font-bold text-xs bg-blue-500 text-white'
          }
        >
          {btnCopy}
        </Link>
      </header>

      {children}
    </section>
  );
};

export default Panel;
