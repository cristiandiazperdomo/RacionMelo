import React from 'react';

const MobileMenu = ({ handleShowMenu }) => {
	return (
		<ul className="mobile-menu">
			<li>
				<i>
					<AiOutlineMenu />
				</i>
			</li>
			<li>
				<a href="/">
					Descubrir
				</a>
			</li>
			<li>
				<a href="/">
					Registrarse
				</a>
			</li>
			<li>
				<a href="/">
					Ingresar
				</a>
			</li>
		</ul>
	)
}