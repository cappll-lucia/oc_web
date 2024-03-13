'use client';
import './navbar.scss';
import Link from 'next/link.js';
import Image from 'next/image.js';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const links: { label: string; path: string }[] = [
	{ label: 'Anteojos Recetados', path: '/anteojosRecetados' },
	{ label: 'Anteojos de Sol', path: '/anteojosSol' },
	{ label: 'Contactología', path: '/contactologia' },
	{ label: 'Audiología', path: '/audiologia' },
	{ label: 'Fotografía', path: '/fotografia' },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='navbar flex-col'>
			<div className='logo'>
				<Link href='/'>
					<Image src='/logo.gif' width={300} height={400} alt='Logo' />
				</Link>
			</div>
			<div className='menu'>
				{links.map(({ label, path }) => (
					<li key={path}>
						<Link href={path}>{label.toLocaleUpperCase()}</Link>
					</li>
				))}
			</div>
			<div className='menu-responsive'>
				<button
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<Bars3Icon />
				</button>
			</div>
			<div className={` ${isOpen ? 'menu-list-flex' : 'menu-list-hidden'}`}>
				{links.map(({ label, path }) => (
					<li key={path}>
						<Link href={path}>{label.toLocaleUpperCase()}</Link>
					</li>
				))}
			</div>
		</div>
	);
}
