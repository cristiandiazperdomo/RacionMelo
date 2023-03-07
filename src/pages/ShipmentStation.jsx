import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { calculateCartTotal } from '../redux/actions/index.js';
import CartItems from '../components/CartItems.jsx';
import ShipmentStationItem from '../components/ShipmentStationItem.jsx';
import amazon from '../assets/logos/amazon.png';
import visa from '../assets/logos/visa.png';
import mastercard from '../assets/logos/mastercard.svg';
import '../styles/ShipmentStation.css';

const ShipmentStation = (props) => {
	const [modifyDeliveryUser, setModifyDeliveryUser] = useState(false);
	const { 
		cart, 
		totalPlusShipping, 
		calculateCartTotal 
	} = props;

	useEffect(() => {
		calculateCartTotal(cart);
	}, [])



	return (
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
								<>
							{ modifyDeliveryUser
								? 	
									<form className="modify-delivery">
										<li>
											<input type="text" value="Cristian Díaz" placeholder="Cristian Díaz" />
										</li>
										<li>
											<input type="text" value="Calle Evergreen Terrace 742" placeholder="Calle Evergreen Terrace 742" />
										</li>
										<li>
											<input type="text" value="Springfield" placeholder="Springfield" />
										</li>
										<li>
											<input type="text" value="987654" placeholder="987654" />
										</li>
										<li>
											<input type="text" value="898 787 676" placeholder="898 787 676" />
										</li>
										<li>
											<input type="text" value="email.amazon@email.com" placeholder="email.amazon@email.com" />
										</li>
									</form>
								:	<ul className="delivery-data" >
										<li>
											<p>Cristian Díaz</p>
										</li>
										<li>
											<p>Calle Evergreen Terrace 742</p>
										</li>
										<li>
											<p>Springfield</p>
										</li>
										<li>
											<p>987654</p>
										</li>
										<li>
											<p>898 787 676</p>
										</li>
										<li>
											<p>email.amazon@email.com</p>
										</li>
									</ul>
							}
								</>
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
								<label for="moneywithdelivery" >Dinero con repartidor</label>
							</li>
							<li>
								<input type="radio" id="paypal" name="waytopay" />
								<label for="paypal">Paypal</label>
							</li>
							<li>
								<input type="radio" id="credit-card" name="waytopay" />
								<label for="credit-card">Tarjeta de credito o debito</label>
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
								<label for="card-email">Email:</label>
								<input type="input" id="card-email" placeholder="Escribe aquí" />
							</li>
							<li>
								<label for="card-name">Nombre de la tarjeta:</label>
								<input type="input" id="card-name" placeholder="Escribe aquí" />
							</li>
						</ul>
					</div>
					<div className="ShipmentStation-total">
						<h4>Total: ${totalPlusShipping}</h4>
					</div>
					<Link to="/successfullpurchase" className="ProductView-goToPay ShipmentStation-button">
						<button type="button" onClick={() => handleAddToCart(product)}>Confirmar Pago</button>				
					</Link>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
		totalPlusShipping: state.totalPlusShipping
	}
}

const mapDispatchToProps = {
	calculateCartTotal,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentStation)