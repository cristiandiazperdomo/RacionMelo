import React from 'react';
import Banner from '../../containers/Banner/Banner.jsx';
import Categories from '../../containers/Categories/Categories.jsx';
import Articles from '../../containers/Articles/Articles.jsx';

const Home = () => {
	return (
		<>
			<Banner />
			<Articles type="Más comprados" id={1} />
			<Articles type="Juguetes" id={2} />
			<Categories />
		</>
	)
}

export default Home;