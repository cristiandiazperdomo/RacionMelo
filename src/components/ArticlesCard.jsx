import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { AiFillPlusCircle } from 'react-icons/ai';
import '../styles/ArticlesCard.css';

const ArticlesCard = () => {
	const { petFood, addToCart } = useContext(MyContext);

	const handleAddToCart = (id) => {
		addToCart(petFood.articles[id]);
	}

	return (
		<>
			{petFood.articles.map(food => 
				<div className="articles-card-container" key={food[0].id}>
					<div className="articles-card">
						<div className="articles-card-top">
							<img src={food[0].urlImage} alt="árticulo" />
						</div>
						<div className="articles-card-bottom">
							<div className="articles-options">
								<div className="money">
									<h3>${food[0].price}</h3>
									<p className="discount">33% OFF</p>
								</div>
								<i className="addToCart" onClick={() => handleAddToCart(food[0].id)}>
									<AiFillPlusCircle />
								</i>
							</div>
							<div className="shipping">
								<p>Envío disponible</p>
							</div>
							<div className="easyDescription">
								{food[0].easyDescription}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ArticlesCard;