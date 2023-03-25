import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import './ArticlesCard.css';

const ArticlesCard = ({ article, articleId }) => {
	return (
		<Link className="articles-card-a" to={`/productview/${article.id - 1}`}>
			<div className="articles-card-container">
				<div className="articles-card">
					<div className="articles-card-top">
						<img src={article.urlImage} alt="árticulo" />
					</div>
					<div className="articles-card-bottom">
						<div className="articles-options">
							<div className="money">
								<h3>${article.price}</h3>
								<p className="discount">33% OFF</p>
							</div>
						</div>
						<div className="shipping">
							<p>Envío disponible</p>
						</div>
						<div className="easyDescription">
							{article.easyDescription}
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ArticlesCard;