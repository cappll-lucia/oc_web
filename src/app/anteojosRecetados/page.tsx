import './recetadosPage.scss';
import type { Color } from '@/api/entities.js';
import axios from 'axios';
import Icon from '@mdi/react';
import { mdiAlert } from '@mdi/js';
import RecetadosShop from '../../components/Shops/RecetadosShop';

const getProducts = async () => {
	try {
		const response = await axios.get(`${process.env.VITE_API_URL}/products/category/3`);
		return response.data.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

const getColors = async () => {
	const response = await axios.get(`${process.env.VITE_API_URL}/colors`);
	return response.data.data.filter((color: Color) => color.name !== '----');
};
const getBrands = async () => {
	const response = await axios.get(`${process.env.VITE_API_URL}/brands`);
	return response.data.data;
};

export default async function AnteojosRecetados() {
	const products = await getProducts();
	const brands = await getBrands();
	const colors = await getColors();

	return (
		<div className='recetados-page'>
			<h1 className='title'>Armazones Anteojos Recetados</h1>
			<div className='warn'>
				<Icon path={mdiAlert} size={0.7} />
				<span>La comercialización de productos se realiza únicamente de maner presencial en el local.</span>
			</div>
			<RecetadosShop products={products} colors={colors} brands={brands} />
		</div>
	);
}
