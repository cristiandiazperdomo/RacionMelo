import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchResult from '../../components/SearchResult/SearchResult.jsx';
import './SearchResults.css';

const SearchResults = ({ inputSearchValue }) => {
	const [searchs, setSearchs] = useState([]);
	const articles = useSelector(state => state.articles);

	useEffect(() => {
		let newResults = [];
		
		articles.map(item => {
			const values = inputSearchValue?.toLowerCase();
			const addToSearchResults = values?.length > 0 ? item.name.toLowerCase().indexOf(values) : undefined;
			if (addToSearchResults !== -1) {
				newResults.push(item);
			}
		});
		setSearchs(newResults);
	}, [inputSearchValue]);

	return (
		<div className="SearchResults mobile">
			<div className="SearchResults-container">
				<ul className="SearchResults-results">
				{ searchs.length > 0 
					?	searchs.map(article => 
							<SearchResult article={article} /> 
						)
					:	articles.map(article => 
							<SearchResult article={article} />
						)
				}
				</ul>
			</div>
		</div>
	)
}


export default SearchResults;