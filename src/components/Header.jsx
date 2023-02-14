import React, { useRef, useState } from 'react';
import Search from './Search.jsx';
import ProfileOptions from './ProfileOptions.jsx';
import MobileSearch from './MobileSearch.jsx';
import {
	AiOutlineMenu,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineUser,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/dogicon2.png';
import '../styles/Header.css';

const Header = () => {
	const [isLogged, setIsLogged] = useState(true);

	const [menuVisible, setMenuVisible] = useState(false);
	const [cursorOverMenu, setCursorOverMenu] = useState(false);
	const [cursorOverButton, setCursorOverButton] = useState(false);

	const handleMakeAppearMobileMenu = () => {
		const mobileMenu = document.querySelector('.mobile-search-container');
		mobileMenu.style.top = '48px';
	}

	const showMenu = () => {
		setMenuVisible(true);
		setCursorOverButton(true);
	}

	const hideMenu = () => {
		setCursorOverButton(false);
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
									{isLogged === false 
									?	<>
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
										</>
									: 	<>
											<li>
												<Link to="/singup">	
													<AiOutlineShoppingCart />	
												</Link>
											</li>
											<li className="header-user">
												<Link to="/singup">		
													Cristian Díaz
													<AiOutlineUser />
												</Link>
												<ProfileOptions />
											</li>
										</>
									}
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