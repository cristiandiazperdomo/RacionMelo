import React from 'react';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import '../styles/MobileSearch.css';

const MobileSearch = ({ isMobileMenuOpen }) => {
	return (
		<div className="mobile-search-container">
			<div className="mobile-search">
				<div className="mobile-search-icon" onClick={isMobileMenuOpen}>
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