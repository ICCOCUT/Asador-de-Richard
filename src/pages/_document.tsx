import { Html, Head, Main, NextScript } from 'next/document';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Alert from './components/Alert';

/**
 * Devuelve un elemento JSX que contiene el<Html> componente que contiene el<Head> componente que
 * contiene el<Header> componente que contiene el<Main> componente que contiene el<Footer> componente
 * que contiene el<NextScript> componente
 * @returns El documento HTML.
 */
export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Header />
				<Alert />
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
