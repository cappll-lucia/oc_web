import Header from '@/components/Navbar/Index';
import Footer from '@/components/Footer/index';
import './global.css';

export const metadata = {
	title: 'Optica Criado',
};

const routes: { label: string; path: string }[] = [
	{ label: 'Anteojos Recetados', path: '/anteojosRecetados' },
	{ label: 'Anteojos de Sol', path: '/anteojosSol' },
	{ label: 'Contactología', path: '/contactologia' },
	{ label: 'Audiología', path: '/audiologia' },
	{ label: 'Anteojos de Seguridad', path: '/anteojosSeguridad' },
	{ label: 'Fotografía', path: '/fotografia' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
					rel='stylesheet'
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<Header navigationItems={routes} />
				{children}
				<Footer navigationItems={routes} />
			</body>
		</html>
	);
}
