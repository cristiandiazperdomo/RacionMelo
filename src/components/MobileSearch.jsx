import React from 'react';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import '../styles/MobileSearch.css';

const MobileSearch = () => {

	const handleMakeDisappearMobileMenu = () => {
		const mobileMenu = document.querySelector('.mobile-search-container');
		mobileMenu.style.top = '-60px';
	}

	return (
		<div className="mobile-search-container">
			<div className="mobile-search">
				<div className="mobile-search-icon" onClick={handleMakeDisappearMobileMenu}>
					<AiOutlineLeft />
				</div>
				<input type="text" name="search" placeholder="Busca algún articulo" />
				<div className="mobile-search-icon">
					<AiOutlineSearch />
				</div>
			</div>
		</div>
	)

}

export default MobileSearch;