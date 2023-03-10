import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Devuelve un pie de página con un logotipo, un menú de navegación y un aviso de derechos de autor.
 * @returns Un componente de pie de página con un logotipo, navegación y derechos de autor.
 */
export default function Footer() {
	return (
		<footer className='text-gray-400 bg-primaryGray body-font'>
			<div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
				<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
					<a
						href='https://www.facebook.com/people/El-asador-de-Richard/100063706142326/'
						target='_blank'
						rel='noreferrer'
						className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
						<Image
							src='/logo.svg'
							width='10'
							height='10'
							alt='empresa'
							className='h-14 w-auto'
						/>
						<span className='ml-3 text-xl'>EL ASADOR DE RICHARD</span>
					</a>
					<p className='mt-2 text-sm text-gray-100'>
						Nuestro restaurante te espera, servicio y comida al más alto nivel,
						porque te lo mereces
					</p>
				</div>
				<div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
					<div className='lg:w-1/3 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-bold text-white tracking-widest text-sm mb-3'>
							TIEMPO DE ATENCIÓN
						</h2>
						<nav className='list-none mb-10 text-gray-100'>
							<li>
								<p>Lunes - Viernes</p>
								<p>8:00 AM - 10:00 PM</p>
							</li>
							<li>
								<p>Sábado</p>
								<p>8:00 AM - 9:00 PM</p>
							</li>
							<li>
								<p>Domingo</p>
								<p>Cerrado</p>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/3 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-bold text-white tracking-widest text-sm mb-3'>
							NAVEGACIÓN
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<Link
									href='/menu'
									className='text-gray-100 hover:text-teal-300'>
									Menú
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='text-gray-100 hover:text-teal-300'>
									Quienes somos
								</Link>
							</li>
							<li>
								<Link
									href='/contacto'
									className='text-gray-100 hover:text-teal-300'>
									Contacto
								</Link>
							</li>
							<li>
								<Link
									href='/platillos'
									className='text-gray-100 hover:text-teal-300'>
									Galería
								</Link>
							</li>
						</nav>
					</div>
					<div className='lg:w-1/3 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-bold text-white tracking-widest text-sm mb-3'>
							PLATOS
						</h2>
						<nav className='list-none mb-10'>
							<p className='text-gray-100 text-justify'>
								Contamos con una variedad de platillos asados y preparados
								distinguidos por nuestro sabor único y especial
							</p>
						</nav>
					</div>
				</div>
			</div>
			<div className='border border-transparent border-t-white'>
				<div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
					<p className='text-gray-100 text-sm text-center sm:text-left'>
						© 2023 El Asador de Richard. Todos los derechos reservados
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						<a href='text-gray-100'>
							<p className='text-gray-100'>Términos de servicio</p>
						</a>
						<p className='text-gray-100 mx-2'>|</p>
						<a href='text-white'>
							<p className='text-gray-100'>Política de privacidad</p>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
}
