import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/dogicon2.png';
import '../styles/Header.css';

const Header = () => {
	return (
		<header className="main-header">
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
					<div className="bottom-header-container"> 
						<div className="left-side">
							<ul className="ul-main-header">
								<li>
									<Link to="/">
										¿Como vender?		
									</Link>
								</li>
								<li>
									<Link to="/">		
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
			<div className="main-header-right">
				<i>
					<AiOutlineMenu />
				</i>		
			</div>
		</header>
	)
}

export default Header;