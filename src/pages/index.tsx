import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>El Asador de Richard</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='El asador de Richard tiene gran ambiente y una variedad de carnes a la brasa.
					cervezas completan esta experiencia. Ven y disfruta de una comida inolvidable.'
				/>
				<link rel='icon' href='/favicon.ico' />
				{/* Facebook meta tags */}
				<meta property='og:url' content='www.elasadorderichard.live/' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='El asador de Richard' />
				<meta
					property='og:description'
					content='El asador de Richard tiene gran ambiente y una variedad de carnes a la brasa.
				Las cervezas completan esta experiencia. Ven y disfruta de una comida inolvidable.'
				/>
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/ICCOCUT/Asador-de-Richard/main/ProjectPreview.png'
				/>
				{/* Twitter meta tags */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='www.elasadorderichard.live/' />
				<meta name='twitter:title' content='El asador de Richard' />
				<meta
					name='twitter:description'
					content='El asador de Richard tiene gran ambiente y una variedad de carnes a la brasa.
				Las cervezas completan esta experiencia. Ven y disfruta de una comida inolvidable.'
				/>
				<meta
					name='twitter:image'
					content='https://raw.githubusercontent.com/ICCOCUT/Asador-de-Richard/main/ProjectPreview.png'
				/>
			</Head>
			<main>
				<h1 className='text-3xl font-bold underline'>El Asador de Richard</h1>
			</main>
		</>
	);
}
