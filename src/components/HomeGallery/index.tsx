import Link from 'next/link.js';
import './homeGallery.scss';

export default function HomeGallery() {
	return (
		<div className='services-gallery'>
			<div className='title'>
				<h1>Nuestros servicios</h1>
			</div>
			<div className='gallery'>
				<div className='services-gallery-img services-gallery-img1' key='1'>
					<Link className='link' href='/anteojosRecetados'>Anteojos Recetados</Link>
				</div>
				<div className='services-gallery-img services-gallery-img2' key='2'>
					<Link className='link' href='/contactologia'>Contactología</Link>
				</div>
				<div className='services-gallery-img services-gallery-img3' key='3'>
					<Link className='link' href='/audiologia'>Audiología</Link>
				</div>
				<div className='services-gallery-img services-gallery-img4' key='4'>
					<Link className='link' href='/anteojosSol'>Anteojos de Sol</Link>
				</div>
				<div className='services-gallery-img services-gallery-img5' key='5'>
					<Link className='link' href='/fotografia'>Fotografía</Link>
				</div>
				<div className='services-gallery-img services-gallery-img6' key='6'>
					<Link className='link' href='/anteojosSeguridad'>Anteojos de Seguridad</Link>
				</div>
			</div>
		</div>
	);
}
