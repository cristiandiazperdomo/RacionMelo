import React from 'react';
import '../styles/ArticlesCard.css';

const ArticlesCard = ({ img, price }) => {
	return (
		<div className="articles-card-container">
			<div className="articles-card">
				<div className="articles-card-top">
					<img src={img} alt="árticulo" />
				</div>
				<div className="articles-card-bottom">
					<div className="money">
						<h3>${price}</h3>
						<p className="discount">33% OFF</p>	
					</div>
					<div className="shipping">
						<p>Envío disponible</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticlesCard;