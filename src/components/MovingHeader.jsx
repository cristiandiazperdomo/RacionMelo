import React, { useRef, useState, useEffect } from 'react';
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

const MovingHeader = ({ handleShowMenu }) => {
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
													<AiOutlineShoppingCart />	
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
					<i onClick={handleShowMenu}>
						<AiOutlineMenu />
					</i>
				</div>		
			</div>
			<MobileSearch />
		</header>
	)
}

export default MovingHeader;