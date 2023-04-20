import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
	addComment, 
	removeComment,
	markAsSpam,
} from '../../redux/actions';
import Comment from '../../components/Comment/Comment.jsx';
import { v4 as uuidv4 } from 'uuid';
import './Comments.css';

const Comments = () => {
	const { comments } = useSelector(state => state.commentsReducer);
	const { userInfo } = useSelector(state => state.userReducer);
	const dispatch = useDispatch();

	const inputRef = useRef();

	const addNewComment = () => {
		const comment_id = uuidv4()
		
		const newComment = {
            user_id: userInfo.id,
            comment_id,
            spam: 0,
            userComment: inputRef.current.value,
            user: userInfo.name,
        };
		dispatch(addComment(newComment));
	}

	const removeComments = (id) => {
		dispatch(removeComment(id));
	}

	const markACommentAsSpam = (id) => {
		dispatch(markAsSpam(id));
	}
	
	return (
		<div className="Comments">
			<div className="Comments_container">	
				<h4 className="Comments_title">Preguntas y respuestas</h4>
				<div className="Comments_general_help">
					<p className="Comments_general_help_title">¿Qué quieres saber?</p>
					<div className="Comments_general_help_buttons">
						<button>Medios de pago y promociones</button>
						<button>Garantía</button>
					</div>
				</div>
				<div className="ask_the_owner">
					<p className="ask_the_owner_title">Pregúntale al Dueño</p>
					<div className="ask_the_owner_form">
						<input type="text" placeholder="Escribe tu pregunta" ref={inputRef} />
						<button onClick={addNewComment}>Preguntar</button>	
					</div>
				</div>
				<h5 className="pre_comments">Últimas realizadas</h5>
				<div className="comments_section">
				{ comments.map(userComment => (
					<Comment 
						id={userComment.id}
						comment_id={userComment.comment_id}
						user_comment={userComment.userComment} 
						removeComments={removeComments} 
						markACommentAsSpam={markACommentAsSpam}
						key={userComment.id}
					/>
				))}
				</div>
			</div>
		</div>
	)
}

export default Comments;