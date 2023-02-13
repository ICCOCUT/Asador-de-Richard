import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carrito from './carrito.svg';

export default function Header() {
	return (
		<header aria-label='Site Header' className='bg-primaryGray'>
			<div className='mx-auto px-4 sm:px-6 lg:px-32'>
				<div className='flex h-16 items-center justify-between'>
					<div className='md:flex md:items-center md:gap-12'>
						<Link className='block' href='/'>
							<Image
								src='/logo.svg'
								width='10'
								height='10'
								alt='empresa'
								className='h-14 w-auto'
							/>
						</Link>
					</div>

					<div className='hidden md:block'>
						<nav aria-label='Site Nav'>
							<ul className='flex items-center gap-6 text-sm'>
								<li>
									<Link
										className='text-primaryYellow transition hover:text-gray-500/75 font-bold text-xl'
										href='/menu'>
										MENÚ
									</Link>
								</li>

								<li>
									<Link
										className='text-primaryYellow transition hover:text-gray-500/75 font-bold text-xl'
										href='/about'>
										SOBRE NOSOTROS
									</Link>
								</li>

								<li>
									<Link
										className='text-primaryYellow transition hover:text-gray-500/75 font-bold text-xl'
										href='/platillos'>
										PLATILLOS
									</Link>
								</li>

								<li>
									<Link
										className='text-primaryYellow transition hover:text-gray-500/75 font-bold text-xl'
										href='/contacto'>
										CONTACTOS
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className='flex items-center gap-4 '>
						<Image
							src='/carrito.svg'
							width='10'
							height='10'
							alt='empresa'
							className='h-14 w-auto'
						/>
						<div className='border-2 border-l-primaryYellow border-transparent'>
							<p className='text-primaryYellow'>+52 33 2038 0734</p>
							<p className='text-primaryYellow'>
								Póngase en contacto con nosotros
							</p>
						</div>
						<div className='sm:flex sm:gap-4'>
							<Link
								className='rounded-2xl bg-primaryYellow px-5 py-2.5 text-sm font-medium text-white shadow'
								href='/'>
								Iniciar Sesión
							</Link>
						</div>

						<div className='block md:hidden'>
							<button className='rounded bg-primaryGray p-2 text-primaryYellow transition hover:'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
