import React from 'react';
import img from '../assets/feed/young-horse2.png';
import "../styles/SuccessfullPurchase.css";

const SuccessfullPurchase = () => {
	return (
		<div className="SuccessfullPurchase">
			<div className="SuccessfullPurchase-top">
				<div className="SuccessfullPurchase-group">
					<div className="SuccessfullPurchase-info">
						<p>¡Compra Exitosa!</p>
						<h4>Llega hoy</h4>
					</div>
					<div className="SuccessfullPurchase-img">
						<img src={img} alt="productos" />
					</div>
				</div>
			</div>
			<div className="SuccessfullPurchase-delivery">
				<div className="SuccessfullPurchase-type-delivery">
					<h4>Envío a domicilio</h4>
					<p>Te avisaremos cuando tu compra llegue</p>
				</div>
				<div className="SuccessfullPurchase-seller">
					<h4>Vendedor</h4>
					<p>Cristian Díaz</p>
					<button type="button" >Enviar Mensaje</button>
				</div>
				<div className="SuccessfullPurchase-details">
					<button>Ver detalles de la compra</button>
				</div>
			</div>
		</div>
	)
}

export default SuccessfullPurchase;