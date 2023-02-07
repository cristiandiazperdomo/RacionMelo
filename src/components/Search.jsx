import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import '../styles/Search.css';

const Search = () => {
	return (
		<div className="search-container">
			<div className="search-input">
				<input
				type="text"
				name="search"
				placeholder="Busca algún articulo"
				/>
			</div>
			<div className="search-icon">
				<AiOutlineSearch />
			</div>
		</div>	
	)
}

export default Search;