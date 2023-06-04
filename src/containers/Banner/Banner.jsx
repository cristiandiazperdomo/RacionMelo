import React from 'react';
// import bannerImage from '../../assets/banners/dogbg.png';
import bannerImage from '../../assets/banners/bulldog-banner.jpg';
import './Banner.css';

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-img-container">
				<img src={bannerImage} alt="comidaparatodoslosanimales" />
			</div>
			<div className="banner-description">
				<p>Alimentando y entreteniendo a tus mejores amigos, en linea.</p>
				<button>Mejores precios</button>
			</div>
		</div>
	)
}

export default Banner;