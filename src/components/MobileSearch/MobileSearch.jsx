import React, { useState, useRef, useEffect } from 'react';
import Search from '../../components/Search/Search.jsx';
import SearchResults from '../../containers/SearchResults/SearchResults.jsx';
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai';
import './MobileSearch.css';

const MobileSearch = ({ moving, isMoving, isMobileMenuOpen }) => {
	const [searchResultsActive, setSearchResultsActive] = useState(false);
	const [inputSearchValue, setInputSearchValue] = useState("");
	const areaDeBusquedaRef = useRef();

	const showInputSearchResults = () => {
		setInputSearchValue(areaDeBusquedaRef.current.value)
		if (areaDeBusquedaRef.current.value.length > 2) {
			setSearchResultsActive(true);
		} else {
			setSearchResultsActive(false);
		}
	}

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
			className={`mobile-search-container ${moving ? "mobile" : ""}`} >
			<div className="mobile-search">
				<div className="mobile-search-icon" onClick={isMobileMenuOpen}>
					<AiOutlineLeft/>
				</div>
				<input 
					type="text" 
					name="search" 
					onChange={showInputSearchResults}
					onClick={showInputSearchResults}
					placeholder="Busca algún articulo"
					ref={areaDeBusquedaRef} />
				<div className="mobile-search-icon">
					<AiOutlineSearch />
				</div>
				{ searchResultsActive && <SearchResults inputSearchValue={inputSearchValue} />}
			</div>
		</div>
	)
}

export default MobileSearch;