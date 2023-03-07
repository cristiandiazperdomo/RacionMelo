import React from 'react';
import Banner from '../containers/Banner.jsx';
import Categories from '../containers/Categories.jsx';
import Articles from '../containers/Articles.jsx';

const Home = () => {
	return (
		<>
			<Banner />
			<Articles type="Más comprados" id="1" />
			<Articles type="Juguetes" id="2" />
			<Categories />
		</>
	)
}

export default Home;