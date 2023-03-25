import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchResult = ({ article }) => {
	return (
		<li key={article.id}>
			<i>
				<AiOutlineSearch />
			</i>
			<p>
				{article.name}
			</p>
		</li>
	)
}

export default SearchResult;