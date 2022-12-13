import { ReactElement } from 'react';
import Head from './head';
import '../styles/globals.css';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const RootLayout = ({ children }: ILayout) => {
  return (
    <html lang="en">
      <Head />
      <body className="bg-gray-800 text-gray-200">{children}</body>
    </html>
  );
};

export default RootLayout;
