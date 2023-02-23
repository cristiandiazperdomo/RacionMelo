import React, { useContext } from 'react';
// import { connect } from 'react-redux';
import { MyContext } from '../context/MyContext';
// import { getState } from '../redux/actions/index.js';
import { AiFillPlusCircle } from 'react-icons/ai';
import '../styles/ArticlesCard.css';

const ArticlesCard = () => {
	const { petFood, addToCart } = useContext(MyContext);

	const handleAddToCart = (id) => {
		addToCart(petFood.articles[id - 1]);
	}
	
	return (
		<>
			{petFood.articles.map(food => 
				<div className="articles-card-container" key={food.id}>
					<div className="articles-card">
						<div className="articles-card-top">
							<img src={food.urlImage} alt="árticulo" />
						</div>
						<div className="articles-card-bottom">
							<div className="articles-options">
								<div className="money">
									<h3>${food.price}</h3>
									<p className="discount">33% OFF</p>
								</div>
								<i className="addToCart" onClick={() => handleAddToCart(food.id)}>
									<AiFillPlusCircle />
								</i>
							</div>
							<div className="shipping">
								<p>Envío disponible</p>
							</div>
							<div className="easyDescription">
								{food.easyDescription}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

// const mapDispatchToProps = {
// 	getState
// }

export default ArticlesCard;
// export default connect(null, mapDispatchToProps)(ArticlesCard);