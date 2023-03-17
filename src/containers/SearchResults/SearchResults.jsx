import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchResults.css';

const SearchResults = ({ articles, inputSearchValue }) => {
	const [searchs, setSearchs] = useState([]);

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
						<li key={article.id}>
							<i>
								<AiOutlineSearch />
							</i>
							<p>
								{article.name}
							</p>
						</li>
				)
				:	articles.map(article => 
						<li key={article.id}>
							<i>
								<AiOutlineSearch />
							</i>
							<p>
								{article.name}
							</p>
						</li>
				)}
				</ul>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		articles: state.articles,
	}
}

export default connect(mapStateToProps, null)(SearchResults);