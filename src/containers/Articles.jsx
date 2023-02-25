import React, { useState } from 'react';
import { connect } from 'react-redux';
import ArticlesCard from '../components/ArticlesCard.jsx';
import useArrayArticles from '../hooks/useArrayArticles.js';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import '../styles/Articles.css';

const Articles = ({ state }) => {
	const [cart, setCart] = useState([]);

	const petFood = state;

	const scrollLeft = () => {
		if (document.querySelector(".articles-cards")) {
			const hourly = document.querySelector(".articles-cards");
			hourly.scrollLeft -= 420;
		}
	};

	const scrollRight = () => {
		if (document.querySelector(".articles-cards")) {
			const hourly = document.querySelector(".articles-cards");
			hourly.scrollLeft += 420;
		}
	};

	return (
		<div className="articles">
			<h3 className="articles-h3">Más comprados</h3>
			<div className="articles-cards-container">
				<MdKeyboardArrowLeft 
				onClick={scrollLeft} />
				<MdKeyboardArrowRight
				onClick={scrollRight} />
			</div>
			<div className="articles-cards">
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