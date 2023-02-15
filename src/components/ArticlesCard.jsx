import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import '../styles/ArticlesCard.css';

const ArticlesCard = ({
	id,
	name,
	urlImage,
	easyDescription,
	price,
}) => {
	return (
		<div className="articles-card-container" key={id}>
			<div className="articles-card">
				<div className="articles-card-top">
					<img src={urlImage} alt="árticulo" />
				</div>
				<div className="articles-card-bottom">
					<div className="articles-options">
						<div className="money">
							<h3>${price}</h3>
							<p className="discount">33% OFF</p>
						</div>
						<AiFillPlusCircle />
					</div>
					<div className="shipping">
						<p>Envío disponible</p>
					</div>
					<div className="easyDescription">
						{easyDescription}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticlesCard;