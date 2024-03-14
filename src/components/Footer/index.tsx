import './footer.scss';
import Link from 'next/link.js';
import { Icon } from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { mdiCopyright } from '@mdi/js';

export default function Footer({
	navigationItems,
}: {
	navigationItems: { label: string; path: string }[];
}) {
	return (
		<>
			<div className='footer'>
				<div>
					<div className='social'>
						<h1>Seguinos!</h1>
						<div className='icons'>
							<Icon path={mdiWhatsapp} size={2.5} />
							<Icon path={mdiFacebook} size={2.5} />
							<Icon path={mdiInstagram} size={2.5} />
						</div>
					</div>
					<div className='nav'>
						<span>Seguí Navegando</span>
						{navigationItems.map(({ label, path }) => (
							<li key={path}>
								<Link href={path}>{label}</Link>
							</li>
						))}
					</div>
					<div className='location'>
						<span>Visitá nuestro local</span>
						<iframe
							className='maps__iframe--map'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6692.107716796221!2d-60.7790316985703!3d-33.00235550916214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7b287706444db%3A0x4424e1756415092d!2s%C3%93ptica%20Criado!5e0!3m2!1ses-419!2sar!4v1649375481181!5m2!1ses-419!2sar'
							width=''
							height=''
							loading='lazy'
						></iframe>
					</div>
				</div>
				<span className='copyR'>
					Lucía Cappellini <Icon path={mdiCopyright} size={0.8} /> 2024
				</span>
			</div>
		</>
	);
}
