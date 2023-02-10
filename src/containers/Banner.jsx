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
						Alimentando y entreteniendo a tus mejores amigos, en línea.
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