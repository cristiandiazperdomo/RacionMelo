import React from 'react';
import { useSelector } from 'react-redux';
import SubComment from '../SubComments/SubComments.jsx';
import './Comment.css';

const Comment = (props) => {
	const {
		id,
		comment_id,
		user_comment, 
		removeComments,
		markACommentAsSpam,
	} = props;

	const { userInfo } = useSelector(state => state.userReducer);

	return (
		<div className="Comment" id={id}>
			<div className="Comment_container">
				<p>{user_comment}</p>
			</div>
			{userInfo.id === id && <button onClick={() => removeComments(userInfo.id)}>DELETE!</button> }
			<button onClick={() => markACommentAsSpam(comment_id)}>SPAM!</button>
			<SubComment />
		</div>
	)
}

export default Comment;