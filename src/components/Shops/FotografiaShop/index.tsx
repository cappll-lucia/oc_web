'use client';
import { useEffect, useState } from 'react';
import type { Product, Color, Brand } from '@/api/entities.js';
import CardProduct from '../../CardProduct';
import './fotografiaShop.scss';
import '../shops.scss';
import Icon from '@mdi/react';
import { mdiTune } from '@mdi/js';

export default function FotografiaShop({ products, colors }: { products: Product[]; colors: Color[] }) {
	const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
	const [selectedColors, setSelectedColors] = useState<number[]>([]);
	const [displayFilters, setDisplayFilters] = useState(false);
	useEffect(() => {
		const filterProducts = () => {
			let filtered = products;
			if (selectedColors.length > 0) {
				filtered = filtered.filter((product: Product) => {
					for (const color of product.colors) {
						if (selectedColors.includes(color.color)) return true;
					}
					return false;
				});
			}
			setFilteredProducts(filtered);
		};

		filterProducts();
	}, [selectedColors]);

	const handleColorFilter = (color: Color) => {
		const index = selectedColors.indexOf(color.id);
		index === -1
			? setSelectedColors([...selectedColors, color.id])
			: setSelectedColors(selectedColors.filter((id) => id !== color.id));
	};

	return (
		<div className='shop'>
			<div className='filters'>
				<h2>Filtrar</h2>
				<button onClick={() => setDisplayFilters(!displayFilters)}>
					<Icon path={mdiTune} size={0.8} />
					<span>Filtrar</span>
				</button>
				<div
					className={`filter-classes ${displayFilters ? 'filter-classes-expand' : 'filter-classes-hidden'}`}
				>
					<div className='colors'>
						<h3>Colores</h3>
						{colors.map((color: Color) => (
							<div className='item' key={color.id}>
								<input
									type='checkbox'
									id={`check-color-${color.id}`}
									checked={selectedColors.includes(color.id)}
									onChange={() => handleColorFilter(color)}
								/>
								<label
									className='mt-px font-light text-gray-700 cursor-pointer select-none'
									id={`check-color-${color.id}`}
								>
									{color.name}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='products-section'>
				{products.length > 0 ? (
					<div>
						{filteredProducts.length > 0 ? (
							filteredProducts.map((prod: Product) => <CardProduct product={prod} key={prod.id} />)
						) : (
							<p>No hay productos coincidentes con la búsqueda</p>
						)}
					</div>
				) : (
					<p>No hay productos disponibles</p>
				)}
			</div>
		</div>
	);
}
