import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card.jsx'
import useArrayCategories from '../hooks/useArrayCategories.js';
import '../styles/Categories.css';

const Categories = ({ categories }) => {

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

const mapStateToProps = state => {
	return {
		categories: state.categories, 
	}
}

export default connect(mapStateToProps, null)(Categories);