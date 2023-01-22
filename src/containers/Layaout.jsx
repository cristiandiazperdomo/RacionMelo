import React from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/Layaout.css';

const Layaout = ({ children }) => {
	return (
		<>
			<Header className="Layaout" />
				{children}
			<Footer />
		</>
	)
}

export default Layaout;