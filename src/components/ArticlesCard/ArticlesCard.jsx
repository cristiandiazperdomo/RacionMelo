import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/index.js';
import { AiFillPlusCircle } from 'react-icons/ai';
import './ArticlesCard.css';

const ArticlesCard = (props) => {
	const petFood = props.state;
	const handleAddToCart = (id) => {
		props.addToCart(petFood.articles[id - 1]);
	}
	
	return (
		<>
			{petFood.articles.map(food => 
				<Link className="articles-card-a" to={`/productview/${food.id - 1}`}>
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
				</Link>
			)}
		</>
	)
}

const mapStateToProps = state => {
	return {
		state,
	}
}

const mapDispatchToProps = {
	addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesCard);