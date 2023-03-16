import React, { useState, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchResults from '../../containers/SearchResults/SearchResults.jsx';
import './Search.css';

const Search = ({ areaDeBusquedaRef, searchResultsActive, setSearchResultsActive }) => {
	const [inputSearchValue, setInputSearchValue] = useState();

	// const inputRef = useRef(null);

	const inputSearch = e => {
		setInputSearchValue(e.target.value)
	}

	return (
		<div className="search" ref={areaDeBusquedaRef} >
			<div className="search-container">
				<div className="search-input">
					<input
						type="text"
						name="search"
						placeholder="Busca algún articulo"
						onClick={() => setSearchResultsActive(!searchResultsActive)}
						onChange={inputSearch} />
				</div>
				<div className="search-icon">
					<AiOutlineSearch />
				</div>
				{
					searchResultsActive && <SearchResults inputSearchValue={inputSearchValue}/>
				}
			</div>	
		</div>
	)
}

export default Search;