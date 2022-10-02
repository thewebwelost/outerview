import { ReactElement } from 'react';
import Header from './Header';

interface ILayout {
  isLoading?: boolean;
  isError?: string;
  children: ReactElement;
}

export default function Layout({
  isLoading = false,
  isError,
  children,
}: ILayout) {
  return (
    <>
      <Header />
      <div className="min-h-full">
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {isError ? (
              <p>Error: {isError}</p>
            ) : isLoading ? (
              <p>Loading...</p>
            ) : (
              children
            )}
          </div>
        </main>
      </div>
    </>
  );
}
