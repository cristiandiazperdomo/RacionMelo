import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
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
					{/*<div className="bottom-header-container"> 
						<div className="left-side">
							<ul>
								<li>
									¿Quíenes somos?		
								</li>
								<li>
									¿Como comprar?		
								</li>
								<li>
									¿Como vender?		
								</li>
							</ul>
						</div>
					</div>*/}
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