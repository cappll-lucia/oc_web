'use client';
import './navbar.scss';
import Link from 'next/link.js';
import Image from 'next/image.js';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function Navbar({ navigationItems }: { navigationItems: { label: string; path: string }[] }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='navbar flex-col'>
			<div className='logo'>
				<Link href='/'>
					<Image src='/logo.gif' width={300} height={400} alt='Logo' />
				</Link>
			</div>
			<div className='menu'>
				{navigationItems.map(({ label, path }) => (
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
				{navigationItems.map(({ label, path }) => (
					<li key={path}>
						<Link href={path}>{label.toLocaleUpperCase()}</Link>
					</li>
				))}
			</div>
		</div>
	);
}
