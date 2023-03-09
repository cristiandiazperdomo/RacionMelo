import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchResults.css';

const SearchResults = ({ articles }) => {
	return (
		<div className="SearchResults mobile">
			<div className="SearchResults-container">
				<ul className="SearchResults-results">
				{ articles.map(article => 
					<li>
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