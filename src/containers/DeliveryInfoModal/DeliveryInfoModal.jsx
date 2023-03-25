import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDeliveryInfo } from '../../redux/actions/index.js';
import './DeliveryInfoModal.css';

const DeliveryInfoModal = ({ setModifyDeliveryUser, modifyDeliveryUser }) => {
	const deliveryInfo = useSelector(state => state.deliveryInfo)
	const [form, setForm] = useState(deliveryInfo);
	const [isSaved, setIsSaved] = useState(true);
	const formRef = useRef(null);

	const dispatch = useDispatch();
	const handleInput = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		})
	}

	const handleIsSaved = () => {
		const toArrayDelivery = Object.entries(deliveryInfo)
		const toArrayForm = Object.entries(deliveryInfo)
		toArrayDelivery.map(info => {
			toArrayForm.map(newInfo => {
				if (info[1] !== newInfo[1]) {
					setIsSaved(false)
				}
			})
		})
		return isSaved;
	}

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(addDeliveryInfo(form));
	}

	const goOutTheModal = () => {
		if (handleIsSaved()) {
			setModifyDeliveryUser(!modifyDeliveryUser)
		} else {
			console.log("no guardaste la nueva Información")
		}
	}

	return (
		<div className="DeliveryInfoModal">
			<div className="DeliveryInfoModal-container">
				<header className="DeliveryInfoModal-header">	
					<h4>Información de Entrega</h4>
					<img 
						src="https://cdn-icons-png.flaticon.com/512/766/766286.png?w=740&t=st=1678215407~exp=1678216007~hmac=f30a2ccd35e502ce61bbe347339496ba162797dfe8bc1dc3cc25741446d1b59e" 
						alt="delivery truck" 
					/>
				</header>
				<div className="DeliveryInfoModal-body">
					<ul>
						<li>
							<h4>Nombre:</h4>
						</li>
						<li>
							<h4>Dirreción:</h4>
						</li>
						<li>
							<h4>Ciudad:</h4>
						</li>
						<li>
							<h4>Código postal:</h4>
						</li>
						<li>
							<h4>Celular:</h4>
						</li>
						<li>
							<h4>Email:</h4>
						</li>
					</ul>
					<form className="modify-delivery" onSubmit={handleSubmit}>
						<input
							type="text" 
							name="userName" 
							defaultValue={form.userName} 
							placeholder={form.userName} 
							onChange={handleInput} />
						<input 
							type="text" 
							name="address"
							defaultValue={form.address} 
							placeholder={form.address} 
							onChange={handleInput} />
						<input 
							type="text" 
							name="city" 
							defaultValue={form.city}
							placeholder={form.city}
							onChange={handleInput} />
						<input 
							type="text" 
							name="postalCode" 
							defaultValue={form.postalCode} 
							placeholder={form.postalCode} 
							onChange={handleInput} />
						<input 
							type="text" 
							name="phoneNumber" 
							defaultValue={form.phoneNumber}
							placeholder={form.phoneNumber}
							onChange={handleInput} />
						<input 
							type="text" 
							name="email" 
							defaultValue={form.email} 
							placeholder={form.email} 
							onChange={handleInput} />
						<div className="DeliveryInfoModal-form-button">
							<button type="button" onClick={handleSubmit}>
								Guardar Información
							</button>
						</div>
					</form>
				</div>
				<footer className="DeliveryInfoModal-footer">
					<button type="button" onClick={goOutTheModal} >
						Continuar
					</button>
				</footer>
			</div>
		</div>
	)
}

export default DeliveryInfoModal;