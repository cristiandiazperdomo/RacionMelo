import React from 'react';
import '../styles/ShipmentStationItem.css';
const ShipmentStationItem = (props) => {
	const { product, calculateCartTotal } = props;

	const calculateTotalForEachProduct = product => Math.round(product.price * product.amount);

	return (
		<div className="ShipmentStationItem-container">
			<div className="ShipmentStationItem">
				<div className="ShipmentStationItem-left">
					<img 
						src={product.urlImage} 
						alt={product.name} 
						className="ShipmentStationItem-img"
					/>
				</div>
				<div className="ShipmentStationItem-description-right">
					<div className="ShipmentStationItem-description">
						<h4>{product.name}</h4>
					</div>
					<div className="ShipmentStationItem-amount">
						<p>${calculateTotalForEachProduct(product)}</p>
						<p>Cantidad: {product.amount}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShipmentStationItem;