import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from './Search.jsx';
import ProfileOptions from './ProfileOptions.jsx';
import MobileSearch from './MobileSearch.jsx';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/dog.png';
import {
	AiOutlineMenu,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineUser,
} from 'react-icons/ai';
import '../styles/MovingHeader.css';

const MovingHeader = (props) => {
	const [isLogged, setIsLogged] = useState(true);

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
						<Search />
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
					<i>
						<AiOutlineSearch />
					</i>		
					<i onClick={props.handleShowMenu}>
						<AiOutlineMenu />
					</i>
				</div>		
			</div>
			<MobileSearch />
		</header>
	)
}

const mapStateToProps = state => {
	return {
		quantity: state.cart.length,
	}
}

export default connect(mapStateToProps, null)(MovingHeader)