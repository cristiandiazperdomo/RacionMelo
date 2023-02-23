import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { aumentar } from '../redux/actions/index.js';
import Search from './Search.jsx';
import ProfileOptions from './ProfileOptions.jsx';
import MobileSearch from './MobileSearch.jsx';
import MobileHeader from './MobileHeader.jsx';
import MovingHeader from './MovingHeader.jsx';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/dog.png';
import {
	AiOutlineMenu,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineUser,
} from 'react-icons/ai';
import '../styles/Header.css';

const Header = (props) => {
	const [isLogged, setIsLogged] = useState(true);
	const [isMoving, setIsMoving] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
		    if (window.pageYOffset > 48) {
		    	setIsMoving(true);
		 	} else {
		    	setIsMoving(false);
		  	}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	}

	const isMobileMenuOpen = () => {
		const mobileSearch = document.querySelector('.mobile-search-container');
		const top  = mobileSearch.style.top || undefined;
		if (top === '-60px' || top === undefined) {
			mobileSearch.style.top = '48px';
		} else {
			mobileSearch.style.top = '-60px';	
		}
	};

	return (
		<>	
		{ isMoving && <MovingHeader handleShowMenu={handleShowMenu} /> }
		<header className="main-header">
				<div className="main-header-menu">
					<div className="main-header-container">
						<div className="main-header-left">
							<div className="top-header-container"> 
								<div>
									<Link to="/" className="left-side">
										<img id="logo" src={logo} />
										<h1>
											Ración Melo
										</h1>
									</Link>
								</div>
							</div>
							<Search />
							<div className="bottom-header-container"> 
								<div className="left-side">
									<ul className="ul-main-header">
										<li>
											<Link to="/" className="how-to-sell">
												¿Como comprar?		
											</Link>
										</li>
										{ isLogged === false 
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
													<Link to="/payment">	
														<AiOutlineShoppingCart />	
													</Link>
												</li>
												<li className="header-user">
													<Link to="/login">		
														Cristian Díaz
														<AiOutlineUser className="user-icon"/>
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
					<div className="main-header-right">
						<i onClick={isMobileMenuOpen}>
							<AiOutlineSearch/>
						</i>
						<i onClick={handleShowMenu}>
							<AiOutlineMenu />
						</i>
					</div>
				</div>
				<MobileSearch isMobileMenuOpen={isMobileMenuOpen} />
				{showMenu && <MobileHeader handleShowMenu={handleShowMenu} />}
			</header>
		
			
		</>
	)
}

// const mapStateToProps = state => {
// 	return {
// 		contador: state.contador,
// 	}
// }

// const mapDispatchToProps = {
// 	aumentar,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;