import React, { useState, useRef, useEffect } from 'react';
import Search from '../../components/Search/Search.jsx';
import SearchResults from '../../containers/SearchResults/SearchResults.jsx';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import './MobileSearch.css';

const MobileSearch = ({ top, isMobileMenuOpen }) => {
	console.log(top)
	const [searchResultsActive, setSearchResultsActive] = useState(false);
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
		<div
			className="mobile-search-container" >
			<div className="mobile-search">
				<div className="mobile-search-icon" onClick={isMobileMenuOpen}>
					<AiOutlineLeft/>
				</div>
				<input 
					type="text" 
					name="search" 
					onClick={() => setSearchResultsActive(!searchResultsActive)} 
					placeholder="Busca algún articulo"
					ref={areaDeBusquedaRef} />
				<div className="mobile-search-icon">
					<AiOutlineSearch />
				</div>
				{ searchResultsActive && <SearchResults /> }
			</div>
		</div>
	)
}

export default MobileSearch;