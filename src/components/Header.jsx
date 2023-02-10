import React, { useRef } from 'react';
import Search from './Search.jsx';
import MobileSearch from './MobileSearch.jsx';
import logo from '../assets/logos/dogicon2.png';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

	const handleMakeAppearMobileMenu = () => {
		const mobileMenu = document.querySelector('.mobile-search-container');
		mobileMenu.style.top = '48px';
	}

	return (
		<header className="main-header">
			<div className="main-header-menu">
				<div className="main-header-container">
					<div className="main-header-left">
						<div className="top-header-container"> 
							<div className="left-side">
								<img id="logo" src={logo} />
								<h1>
									Ración Melo
								</h1>
							</div>
						</div>
						<Search />
						<div className="bottom-header-container"> 
							<div className="left-side">
								<ul className="ul-main-header">
									<li>
										<Link to="/">
											¿Como vender?		
										</Link>
									</li>
									<li>
										<Link to="/singup">		
											Registrarse	
										</Link>
									</li>
									<li>
										<Link to="/login">		
											Entrar		
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div> 
				</div>
				<div className="main-header-right" onClick={handleMakeAppearMobileMenu}>
					<i>
						<AiOutlineSearch />
					</i>		
					<i>
						<AiOutlineMenu />
					</i>
				</div>		
			</div>
			<MobileSearch />
		</header>
	)
}

export default Header;