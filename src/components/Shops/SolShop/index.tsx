'use client';
import { useEffect, useState } from 'react';
import type { Product, Color, Brand } from '@/api/entities.js';
import CardProduct from '../../CardProduct';
import './solShop.scss';
import '../shops.scss';
import Icon from '@mdi/react';
import { mdiTune } from '@mdi/js';

export default function SolShop({
	products,
	colors,
	brands,
}: {
	products: Product[];
	colors: Color[];
	brands: Brand[];
}) {
	const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
	const [selectedColors, setSelectedColors] = useState<number[]>([]);
	const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
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
			if (selectedBrands.length > 0) {
				filtered = filtered.filter((product: Product) => selectedBrands.includes(product.brand.id));
			}
			setFilteredProducts(filtered);
		};

		filterProducts();
	}, [selectedColors, selectedBrands]);

	const handleColorFilter = (color: Color) => {
		const index = selectedColors.indexOf(color.id);
		index === -1
			? setSelectedColors([...selectedColors, color.id])
			: setSelectedColors(selectedColors.filter((id) => id !== color.id));
	};
	const handleBrandFilter = (brand: Brand) => {
		const index = selectedBrands.indexOf(brand.id);
		index === -1
			? setSelectedBrands([...selectedBrands, brand.id])
			: setSelectedBrands(selectedBrands.filter((id) => id !== brand.id));
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
					<div className='brands'>
						<h3>Marcas</h3>
						{brands.map((brand: Brand) => (
							<div className='item' key={brand.id}>
								<input
									type='checkbox'
									id={`check-brand-${brand.id}`}
									checked={selectedBrands.includes(brand.id)}
									onChange={() => handleBrandFilter(brand)}
								/>
								<label
									className='mt-px font-light text-gray-700 cursor-pointer select-none'
									htmlFor='check'
									id={`check-brand-${brand.id}`}
								>
									{brand.name}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='products-section'>
				{filteredProducts.map((prod: Product) => (
					<CardProduct product={prod} key={prod.id} />
				))}
			</div>
		</div>
	);
}
