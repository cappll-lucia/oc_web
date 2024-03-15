import './global.css';
import { products } from '../../public/products.js';
import type { Product } from '@/api/entities.js';
import HomeGallery from '@/components/HomeGallery';
import HomeProductsNews from '@/components/HomeProductsNews';

export default function Home() {
	return (
		<>
			<div className='landing'>
				<div className='text'>
					<h1>Lorem ipsum dolor sit</h1>
					<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
					<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
				</div>
				<div style={{ height: '20vh', overflow: 'hidden' }}>
					<svg
						viewBox='0 0 500 150'
						preserveAspectRatio='none'
						style={{ height: '100%', width: '100%', margin: 0, border: 'none' }}
					>
						<path
							d='M-50.51,-36.00 C163.94,138.66 349.20,-49.98 503.67,23.20 L500.00,150.00 L0.00,150.00 Z'
							style={{ stroke: 'none', fill: '#1f28a1' }}
						></path>
					</svg>
				</div>
			</div>
			<HomeGallery />
			{/* <div className='news-products'>
				{products.map((prod: Product) => {
					return <p>{prod.name}</p>;
				})}
			</div> */}

			<HomeProductsNews />
		</>
	);
}
