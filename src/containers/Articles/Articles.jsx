import React, { useState } from 'react';
import { connect } from 'react-redux';
import ArticlesCard from '../../components/ArticlesCard/ArticlesCard.jsx';
import useArrayArticles from '../../hooks/useArrayArticles.js';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import './Articles.css';

const Articles = (props) => {
	const [cart, setCart] = useState([]);

	const { state, type, id } = props;

	const petFood = state;

	const scrollLeft = id => {
		if (document.querySelector(`.articles-cards${id}`)) {
			const hourly = document.querySelector(`.articles-cards${id}`);
			hourly.scrollLeft -= 472; 
		}
	};

	const scrollRight = id => {
		if (document.querySelector(`.articles-cards${id}`)) {
			const hourly = document.querySelector(`.articles-cards${id}`);
			hourly.scrollLeft += 472;
		}
	};

	return (
		<div className="articles">
			<h3 className="articles-h3">{type}</h3>
			<div className="articles-cards-container">
				<MdKeyboardArrowLeft 
				onClick={() => scrollLeft(id)} />
				<MdKeyboardArrowRight
				onClick={() => scrollRight(id)} />
			</div>
			<div className={`articles-cards articles-cards${id}`}>
				<ArticlesCard 
					petFood={petFood}
					cart={cart}
					setCart={setCart}
				/>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		state,
	}
}

export default connect(mapStateToProps, null)(Articles);