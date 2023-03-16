import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search.jsx';
import ProfileOptions from '../ProfileOptions/ProfileOptions.jsx';
import MobileSearch from '../MobileSearch/MobileSearch.jsx';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/dog.png';
import {
	AiOutlineMenu,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineUser,
} from 'react-icons/ai';
import './MovingHeader.css';

const MovingHeader = (props) => {
	const [isLogged, setIsLogged] = useState(true);
	const [isMoving, setIsMoving] = useState(false);
	const [searchResultsActive, setSearchResultsActive] = useState(false);

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

	const isMobileMenuOpen = () => {
		const mobileSearch = document.querySelector('.mobile-search-container');
		const top  = mobileSearch.style.top || undefined;
		if (top === '-60px' || top === undefined) {
			mobileSearch.style.top = "0px";
			mobileSearch.style.position = "fixed";
		} else {
			mobileSearch.style.top = '-60px';	
		}
	};

	const areaDeBusquedaRef = useRef();

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
		<header className="main-header-moving main-header-moving">
			<div className="main-header-menu">
				<div className="main-header-container moving">
					<div className="main-header-left">
						<div className="top-header-container"> 
							<div>
								<Link to="/" className="left-side">
									<img id="logo" src={logo} />
									<h2 className="moving-header-h2">
										Ración Melo
									</h2>
								</Link>
							</div>
						</div>
						<Search 
						areaDeBusquedaRef={areaDeBusquedaRef} 
						searchResultsActive={searchResultsActive} 
						setSearchResultsActive={setSearchResultsActive} />
						<div className="bottom-header-container"> 
							<div className="left-side">
								<ul className="ul-main-header">
									<li>
										<Link to="/">
											¿Como comprar?		
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
												<Link to="/payment">	
													<AiOutlineShoppingCart className="cart-icon" />
													<div className="cart-length cart-length-moving">{props.quantity > 0 ? props.quantity : 0}</div>
												</Link>
											</li>
											<li className="header-user">
												<Link to="/login">		
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
				<div className="main-header-right moving-header">
					<i onClick={isMobileMenuOpen}>
						<AiOutlineSearch />
					</i>		
					<i onClick={props.handleShowMenu}>
						<AiOutlineMenu />
					</i>
				</div>
			</div>
			{ isMoving && <MobileSearch moving={true} isMoving={isMoving} isMobileMenuOpen={isMobileMenuOpen} />}
		</header>
	)
}

const mapStateToProps = state => {
	return {
		quantity: state.cart.length,
	}
}

export default connect(mapStateToProps, null)(MovingHeader)