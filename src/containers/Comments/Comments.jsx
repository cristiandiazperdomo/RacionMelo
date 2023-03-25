import React from 'react';
import Comment from '../../components/Comment/Comment.jsx';
import './Comments.css';

const Comments = () => {
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
						<input type="text" placeholder="Escribe tu pregunta" />
						<button>Preguntar</button>	
					</div>
				</div>
				<h5 className="pre_comments">Últimas realizadas</h5>
				<div className="comments_section">
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</div>
			</div>
		</div>
	)
}

export default Comments;