import './cardProduct.scss';
import type { Product } from '@/api/entities.js';

const getImageUrl = (url: string) => `${process.env.VITE_API_URL}/products/image/${url}`;
const getBackgroundStyle = (background: any) => {
	if (background.startsWith('#')) {
		return { backgroundColor: background };
	} else {
		try {
			const gradient = JSON.parse(background);
			if (gradient && gradient._type === 'linear') {
				return {
					backgroundImage: `linear-gradient(${gradient._angle}deg, ${gradient._stops
						.map(([color, position]: [string, number]) => `${color} ${position * 100}%`)
						.join(', ')})`,
				};
			}
		} catch (error) {
			return {};
		}
	}
};
export default function CardProduct({ product }: { product: Product }) {
	return (
		<div className='card-product' key={product.id}>
			<div className='prod-image-sq'>
				<img src={getImageUrl(product.colors[0].images_url[0])} alt='prod-image' />
			</div>
			<div className='prod-data'>
				<span className='name'>{product.name}</span>
				<span className='brand'>{product.brand.name}</span>
				<div className='colors'>
					{product.colors.map((color: any) => {
						if (color.name != '---') {
							return <div style={getBackgroundStyle(color.background)}></div>;
						}
					})}
				</div>
			</div>
		</div>
	);
}
