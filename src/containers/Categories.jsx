import React from 'react';
import Card from '../components/Card.jsx'
import useArrayCategories from '../hooks/useArrayCategories.js';
import '../styles/Categories.css';

const Categories = () => {
	let images = useArrayCategories(); 

	return (
		<div className="categories">
			{
				images.obj.map( info => 
					<Card 
						key={info.id}
						img={info.img} 
						typeFood={info.typeFood} 
						description={info.description} 
					/>
				)
			}
		</div>
	)
}

export default Categories;