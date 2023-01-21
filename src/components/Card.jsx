import React from 'react';
import '../styles/CategoriesCard.css';

const Card = ({ img, typeFood, description }) => {

	return (
		<div className="categories-card-container">
			<div className="categories-card">	
				<div className="categories-card-top">
					<img src={img} alt="icono-categories-card" />
				</div>
				<div className="categories-card-bottom">
					<h3>{typeFood}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

export default Card;