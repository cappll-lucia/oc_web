import './homeProductsNews.scss';
import type { Product } from '@/api/entities.js';
import CardProduct from '../CardProduct';
import axios from 'axios';

const getProducts = async () => {
	const response = await axios.get(`${process.env.VITE_API_URL}/products`);
	return response.data.data;
};

export default async function HomeProductsNews({}) {
	const products = await getProducts();
	return (
		<div className='home-prods-news'>
			<div className='wave' style={{ height: '20vh', overflow: 'hidden' }}>
				<svg
					viewBox='0 0 500 150'
					preserveAspectRatio='none'
					style={{
						height: '100%',
						width: '100%',
						margin: 0,
						border: 'none',
						backgroundColor: 'rgba(255, 255, 255, 0)',
					}}
				>
					<path
						d='M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z'
						style={{ stroke: 'none', fill: '#1F28A1' }}
					></path>
				</svg>
			</div>
			<div className='content'>
				<h1>Novedades</h1>
				<div className='products-card-section'>
					{products.map((prod: Product) => (
						<CardProduct product={prod} />
					))}
				</div>
			</div>
		</div>
	);
}
