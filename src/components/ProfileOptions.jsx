import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProfileOptions.css';

const ProfileOptions = ({ setCursorOverButton, cursorOverMenu, setCursorOverMenu, cursorOverButton, setMenuVisible }) => {

	const showMenu = () => {
		setCursorOverMenu(true);
		setMenuVisible(true);
	}

	const hideMenu = () => {
		setCursorOverMenu(false);
		setMenuVisible(false);
	}
	return (
		<div 
			className="profile-options-container"
			onMouseEnter={() => showMenu()}
			onMouseLeave={() => { 
				!cursorOverMenu && !cursorOverButton && hideMenu()
			}}
		>
			<div className="profile-options">
				<ul className="options-ul">
					<li className="options-li">
						<Link to="/boughts">
							Historial de compras
						</Link>
					</li>
					<li className="options-li">
						<Link to="/settings">
							Configurar cuenta
						</Link>
					</li>
					<li className="options-li">
						<Link to="/closeSession">
							Cerrar sesión
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ProfileOptions;