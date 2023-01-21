import React from 'react';
import Header from '../components/Header.jsx'
import '../styles/Layaout.css';

const Layaout = ({ children }) => {
	return (
		<div>
			<Header className="Layaout" />
				{children}
		</div>
	)
}

export default Layaout;