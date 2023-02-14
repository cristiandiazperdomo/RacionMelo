import React from 'react';
import ArticlesCard from '../components/ArticlesCard.jsx';
import useArrayArticles from '../hooks/useArrayArticles.js';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import '../styles/Articles.css';

const Articles = () => {
	const images = useArrayArticles();

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
				{images.petFood.map(info => 
					<ArticlesCard 
						id={info.id} 
						name={info.name}
						urlImage={info.urlImage}
						easyDescription={info.easyDescription}
						price={info.price}
					/>
				)}
			</div>
		</div>
	)
}

export default Articles;