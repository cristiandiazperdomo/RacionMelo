import React from 'react';
import { useSelector } from 'react-redux';
import ArticlesCard from '../../components/ArticlesCard/ArticlesCard.jsx';
import useArrayArticles from '../../hooks/useArrayArticles.js';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import './Articles.css';

const Articles = ({ type, id }) => {
	const articles = useSelector(state => state.itemReducer.articles);

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
				{ articles.map(article => 
					// 43 is just a random number
					<ArticlesCard article={article} key={(article.id + 43) * id}/>
				)}
			</div>
		</div>
	)
}

export default Articles;