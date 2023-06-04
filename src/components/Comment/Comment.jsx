import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import SubComment from '../SubComments/SubComments.jsx';
import RemoveModal from '../../components/modals/RemoveModal/RemoveModal.js';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiSpam2Line } from "react-icons/ri";
import './Comment.css';

const Comment = (props) => {
	const [liked, isLiked] = useState(true);
	const [modalActive, setModalActive] = useState(false);
	const modalArea = useRef();

	const {
		id,
		comment_id,
		likes,
		user_comment,
		handleLikedComment,
		markACommentAsSpam,
		removeComments,
		isShowRemoveModal,
		showRemoveModal,
		isShowSpamModal,
		showSpamModal,
	} = props;

	const { userInfo } = useSelector(state => state.userReducer);

	const likedComment = (comment_id, user_id) => {
		isLiked(!liked);
		handleLikedComment(comment_id, user_id);
	}

	const isModalAreaActive = event => { // DEVUELVE EL VALOR DE CONTAINS 4 VECES COMO LOS COMENTARIOS TENGO QUE HACER QUE AGREGA A UN COMENTARIO.
		console.log(modalArea.current.contains(event.target));

		if ((showSpamModal || showRemoveModal) && (modalArea.current && !modalArea.current.contains(event.target))) {
			isShowSpamModal(false);
			isShowRemoveModal(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', isModalAreaActive);

	    return () => {
	    	document.removeEventListener('click', isModalAreaActive);
	    };
	}, []);

	return (
		<div className="Comment" id={id}>
			<div className="Comment_container">
				<p>{user_comment}</p>
			</div>
			<div className="comment_buttons">
				{ liked
					? <button className="comment_liked" onClick={() => likedComment(comment_id, userInfo.id)}>
						<AiOutlineLike /> {likes.length} <p>Me gusta</p>
					</button>
					: <button className="comment_liked" onClick={() => likedComment(comment_id, userInfo.id)}>
						<AiFillLike /> {likes.length} <p>Te gusta</p>
					</button>
				}
				{userInfo.id === id && <button className="comment_trash" onClick={() => isShowRemoveModal(true)}><FaRegTrashAlt /> <p>Borrar</p></button> }
				<button className="mark_as_spam" onClick={() => isShowSpamModal(true)}><RiSpam2Line/> <p>Marcar como spam</p></button>
				{/* AGREGAR LA POSIBILIDAD DE AGREGAR UN COMENTARIO EN OTRO COMENTARIO */}
				{/*<SubComment />*/}
			</div>
			{ showRemoveModal 
				&& <RemoveModal 
						id={comment_id}
						modalRef={modalArea}
						showModal={showRemoveModal} 
						isShowModal={isShowRemoveModal} 
						action={removeComments} 
						main_content="Eliminar"
						content="¿Estás seguro de que deseas eliminar este comentario?"/>						
					}
			{ showSpamModal
				&& <RemoveModal 
						id={id}
						modalRef={modalArea}
						showModal={showSpamModal} 
						isShowModal={isShowSpamModal} 
						action={markACommentAsSpam}
						main_content="Spam"
						content="¿Estás seguro de que deseas reportar este comentario como spam?"/>						
					}
		</div>
	)
}

export default Comment;