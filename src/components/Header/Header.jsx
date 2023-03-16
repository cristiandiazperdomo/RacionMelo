import React, { useState, useRef, useEffect, } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search.jsx';
import ProfileOptions from '../ProfileOptions/ProfileOptions.jsx';
import MobileSearch from '../MobileSearch/MobileSearch.jsx';
import MobileHeader from '../MobileHeader/MobileHeader.jsx';
import MovingHeader from '../MovingHeader/MovingHeader.jsx';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/dog.png';
import {
	AiOutlineMenu,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineUser,
} from 'react-icons/ai';
import './Header.css';

const Header = (props) => {
	const [isLogged, setIsLogged] = useState(true);
	const [isMoving, setIsMoving] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [searchResultsActive, setSearchResultsActive] = useState(false);
	const [top, setTop] = useState(0);

	const areaDeBusquedaRef = useRef();

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
	}, [isMoving]);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	}

	const isMobileMenuOpen = () => {
		const mobileSearch = document.querySelector('.mobile-search-container');
		const top  = mobileSearch.style.top || undefined;
		if (top === '-60px' || top === undefined) {
			console.log(document.clientWidth)
			if (document.clientWidth < 768 && window.pageYOffset > 48) {
				mobileSearch.style.top = "0";
			} else {
				mobileSearch.style.top = '48px';
			}
			setTop(mobileSearch.style.top);
		} else {
			mobileSearch.style.top = '-60px';	
			setTop(mobileSearch.style.top)
		}
	};

	const isSearchResultsActive = event => {
		if (areaDeBusquedaRef.current && !areaDeBusquedaRef.current.contains(event.target)){
			setSearchResultsActive(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', isSearchResultsActive);

	    return () => {
	    	document.removeEventListener('click', isSearchResultsActive);
	    };
	}, [])

	return (
		<>	
		{ isMoving && <MovingHeader handleShowMenu={handleShowMenu} />}
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
							<Search 
								areaDeBusquedaRef={areaDeBusquedaRef} 
								setSearchResultsActive={setSearchResultsActive} 
								searchResultsActive={searchResultsActive} 
								isMobileMenuOpen={isMobileMenuOpen} />
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
												<li className="cart-icon-container">
													<Link to="/payment">
														<AiOutlineShoppingCart className="cart-icon" />
														<div className="cart-length">{props.quantity > 0 ? props.quantity : 0}</div>
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
				<MobileSearch top={top} isMobileMenuOpen={isMobileMenuOpen} />
				{showMenu && <MobileHeader handleShowMenu={handleShowMenu} />}
			</header>
		
			
		</>
	)
}

const mapStateToProps = state => {
	return {
		quantity: state.cart.length,
	}
}

export default connect(mapStateToProps, null)(Header);
