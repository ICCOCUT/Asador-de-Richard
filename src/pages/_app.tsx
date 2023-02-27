import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

/**
 * Es una función que toma un Componente y pageProps y devuelve un Componente con pageProps
 * @param {AppProps}  - Componente: el componente de la página que se está representando.
 * @returns El componente que se está representando.
 */

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
