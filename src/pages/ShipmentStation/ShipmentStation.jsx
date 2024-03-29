import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { calculateCartTotal } from '../../redux/actions/index.js';
import CartItems from '../../components/CartItems/CartItems.jsx';
import ShipmentStationItem from '../../components/ShipmentStationItem/ShipmentStationItem.jsx';
import DeliveryInfoModal from '../../containers/DeliveryInfoModal/DeliveryInfoModal.jsx';
import amazon from '../../assets/logos/amazon.png';
import visa from '../../assets/logos/visa.png';
import mastercard from '../../assets/logos/mastercard.svg';
import './ShipmentStation.css';

const ShipmentStation = () => {
	const [modifyDeliveryUser, setModifyDeliveryUser] = useState(false);
	const { 
		cart, 
		totalPlusShipping,
		deliveryInfo,
	} = useSelector(state => state.cartReducer);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateCartTotal(cart));
	}, [])

	return (
		<>
			<div className="ShipmentStation">
				<div className="ShipmentStation-container">
					<div className="ShipmentStation-left">
						<div className="ShipmentStation-top">
							<h3 className="title-page review">Revisión y Envío</h3>
							<div className="ShipmentStation-articles">
								{ cart.map(product => (
									<ShipmentStationItem product={product} key={product.id} />
								))}
							</div>
						</div>
						<div className="ShipmentStation-bottom">
							<div className="delivery-information">
								<h3 className="title-page">Información de Entrega</h3>	
								{ modifyDeliveryUser 
								?	<button type="button" onClick={() => setModifyDeliveryUser(!modifyDeliveryUser)}>
										Guardar Información
									</button>
								: 	<button type="button" onClick={() => setModifyDeliveryUser(!modifyDeliveryUser)}>
										Editar Información
									</button>
								}
							</div>
							<div className="delivery-user-information">							
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
								<ul className="delivery-data" >
									<li>
										<p>{deliveryInfo.userName}</p>
									</li>
									<li>
										<p>{deliveryInfo.address}</p>
									</li>
									<li>
										<p>{deliveryInfo.city}</p>
									</li>
									<li>
										<p>{deliveryInfo.postalCode}</p>
									</li>
									<li>
										<p>{deliveryInfo.phoneNumber}</p>
									</li>
									<li>
										<p>{deliveryInfo.email}</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="ShipmentStation-right">
						<h3 className="title-page">Información de Entrega</h3>	
						<div className="PaymentDetails">
							<h3>Detalles de Pago</h3>
							<ul>
								<li>
									<input type="radio" id="moneywithdelivery" name="waytopay" />
									<label htmlFor="moneywithdelivery" >Dinero con repartidor</label>
								</li>
								<li>
									<input type="radio" id="paypal" name="waytopay" />
									<label htmlFor="paypal">Paypal</label>
								</li>
								<li>
									<input type="radio" id="credit-card" name="waytopay" />
									<label htmlFor="credit-card">Tarjeta de credito o debito</label>
								</li>
							</ul>
							<ul className="credit-card-info">
								<li><img src={amazon} /></li>
								<li><img src={mastercard} /></li>
								<li><img src={visa} /></li>
							</ul>
						</div>
						<div className="Info-card">
							<ul>
								<li>
									<label htmlFor="card-email">Email:</label>
									<input type="input" id="card-email" placeholder="Escribe aquí" />
								</li>
								<li>
									<label htmlFor="card-name">Nombre de la tarjeta:</label>
									<input type="input" id="card-name" placeholder="Escribe aquí" />
								</li>
							</ul>
						</div>
						<div className="ShipmentStation-total">
							<h4>Total: ${totalPlusShipping}</h4>
						</div>
						<Link 
							to="/successfullpurchase" 
							className="ProductView-goToPay ShipmentStation-button"
						>
							<button type="button">Confirmar Pago</button>				
						</Link>
					</div>
				</div>
			</div>
			{ modifyDeliveryUser &&
				<DeliveryInfoModal modifyDeliveryUser={modifyDeliveryUser} setModifyDeliveryUser={setModifyDeliveryUser} />
			}
		</>
	)
}

export default ShipmentStation;