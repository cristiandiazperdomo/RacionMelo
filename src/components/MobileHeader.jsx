import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import '../styles/MobileHeader.css';

const MobileHeader = ({ handleShowMenu }) => {
	return (
		<div className="MobileHeader">
			<ul className="mobile-ul">
				<li className="mobile-li">
					<Link to="/payment">	
						<AiOutlineShoppingCart />	
					</Link>
				</li>
				<li className="mobile-li">
					<Link to="/">	
						<AiOutlineUser className="user-icon" />
					</Link>
				</li>
				<li className="mobile-li">
					<Link onClick={handleShowMenu}>	
						<AiOutlineClose />
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default MobileHeader;