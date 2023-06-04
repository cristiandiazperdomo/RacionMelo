import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import './RemoveModal.css';

const RemoveModal = (props) => {
	const { 
		id,
		showModal,
		isShowModal,
		action,
		main_content,
		content,
		modalRef
	} = props;

	const handleAction = (id) => {
		isShowModal(!showModal);
		action(id);
	}

	const closeModal = () => {
		isShowModal(!showModal);
	}

	return (
		<div className="RemoveModal-container">
			<div className="RemoveModal-blurZone" onClick={closeModal}>

			</div>
			<div className="RemoveModal" ref={modalRef}>
				<header>
					<p>Confirmación de {main_content}</p>
					<GrFormClose onClick={() => isShowModal(!showModal)} />
				</header>
				<section>
					<div>
						<p>{content}</p>
					</div>
				</section>
				<footer>
					<button onClick={() => isShowModal(!showModal)}>
						Cancelar
					</button>
					<button onClick={() => handleAction(id)}>
						Enviar
					</button>
				</footer>
			</div>
		</div>
	)
}

export default RemoveModal;