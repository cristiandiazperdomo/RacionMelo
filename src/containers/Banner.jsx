import React from 'react';
import bannerImage from '../assets/banners/picture.png';
import '../styles/Banner.css';

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-right-side">
				<img src={bannerImage} />
			</div>
			<div className="banner-left-side-container">
				<div className="banner-left-side">
					<h2>
						Fod Fool
					</h2>
					<p>
						COMPRA LOS MEJORES ALIMENTOS
						PARA CUALQUIER ANIMAL, EN EL
						MEJOR SITIO WEB DE MELO, CERRO
						LARGO, EN EL
						MEJOR SITIO WEB DE MELO, CERRO
						LARGO.
					</p>
					<button>
						Mejores precios
					</button>
				</div>
				<div className="banner-border"></div>
			</div>
		</div>
	)
}

export default Banner;