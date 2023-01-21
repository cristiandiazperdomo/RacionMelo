import React from 'react';
import Banner from '../containers/Banner.jsx';
import Categories from '../containers/Categories.jsx';
import Articles from '../containers/Articles.jsx';

const Home = () => {
	return (
		<>
			<Banner />
			<Categories />
			<Articles />
		</>
	)
}

export default Home;