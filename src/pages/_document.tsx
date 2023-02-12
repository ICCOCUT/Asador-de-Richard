import { Html, Head, Main, NextScript } from 'next/document';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Header />
				<Main />
				<Footer />
				<NextScript />
			</body>
		</Html>
	);
}
