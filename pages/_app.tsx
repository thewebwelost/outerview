import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/authContext';
import { store } from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthContextProvider>
  );
}

export default MyApp;
