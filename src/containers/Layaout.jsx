import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Layaout.css';

const Layaout = ({ children }) => {
	const location = useLocation();

	return (
		<>
			{location.pathname === '/login' || location.pathname === '/singup' 
			? 
			<>
				{children}
			</>
			:
			<> 
				<Header className="Layaout"/>
					{children}
				<Footer />
			</>
			}
		</>
	)
}

export default Layaout;