import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card.jsx'
import useArrayCategories from '../../hooks/useArrayCategories.js';
import './Categories.css';

const Categories = () => {
	const categories = useSelector(state => state.categories);

	return (
		<div className="categories-container">
			<h3 className="categories-h3">Categorias</h3>
			<div className="categories">
				{
					categories.map( info => 
						<Card 
							key={info.id}
							img={info.img} 
							typeFood={info.typeFood} 
							description={info.description} 
						/>
					)
				}
			</div>
		</div>
	)
}


export default Categories;