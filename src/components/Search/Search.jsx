import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResults from '../../containers/SearchResults/SearchResults.jsx';
import './Search.css';

const Search = ({ areaDeBusquedaRef, searchResultsActive, setSearchResultsActive, isMobileMenuOpen }) => {
	return (
		<div className="search" ref={areaDeBusquedaRef} >
			<div className="search-container">
				<div className="search-input">
					<input
						type="text"
						name="search"
						placeholder="Busca algún articulo"
						onClick={() => setSearchResultsActive(!searchResultsActive)}
					/>
				</div>
				<div className="search-icon">
					<AiOutlineSearch />
				</div>
				{
					searchResultsActive && <SearchResults />
				}
			</div>	
		</div>
	)
}

export default Search;