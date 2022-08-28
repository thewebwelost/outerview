import { ReactElement } from 'react';
import Header from './Header';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <div className="min-h-full">
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
