import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchResults.css';

const SearchResults = ({ articles, inputSearchValue }) => {
	const [searchs, setSearchs] = useState([]);

	useEffect(() => {
		articles.map(item => {
			if (item.name.includes(inputSearchValue) && inputSearchValue.length > 0) {
				const isItemAlreadyAddedToResults = searchs.some(search => item.id !== search.id)
				if (isItemAlreadyAddedToResults) {
					setSearchs(searchs);
				} else {
					setSearchs([ 
						...searchs, 
						item,
					]);
				}
			} else {
				setSearchs([]);
			}
		});
	}, [inputSearchValue])

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