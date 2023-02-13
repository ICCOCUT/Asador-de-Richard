import '@/styles/globals.css';
import type { AppProps } from 'next/app';

/**
 * Es una función que toma un Componente y pageProps y devuelve un Componente con pageProps
 * @param {AppProps}  - Componente: el componente de la página que se está representando.
 * @returns El componente que se está representando.
 */
export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
