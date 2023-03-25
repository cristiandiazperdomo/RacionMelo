import React from 'react';
import SubComment from '../SubComments/SubComments.jsx';
import './Comment.css';

const Comment = () => {
	return (
		<div className="Comment">
			<div className="Comment_container">
				<p>Hola! Necesitaría para una fiesta que voy a hacer en Mayo 6 promos, 
				de 3 pack cada una. Tengo que hacer de a una la compra? O lo puedo hacer 
				todo junto?</p>
			</div>
			<SubComment />
		</div>
	)
}

export default Comment;