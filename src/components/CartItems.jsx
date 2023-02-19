import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import '../styles/CartItems.css';

const CartItem = ({ product }) => {

	const [ item ] = product;
	
	return (
		<div className="CartItem-container">
			<div className="CartItem">
				<div className="CartItem-left">
					<img 
						src={item.urlImage} 
						alt={item.name} 
						className="CartItem-img"
					/>
					<div className="CartItem-description">
						<h4>{item.name}</h4>
						<p>{item.name}</p>
						<button>Eliminar</button>
					</div>
				</div>
				<div className="CartItem-description-right">
					<div className="CartItem-amount">
						<AiOutlineMinus className="CartItem-minus" />
						<input type="text" value="4" />
						<AiOutlinePlus className="CartItem-plus" />
					</div>
					<p>${item.price}</p>
					<p>$103.04</p>
				</div>
			</div>
		</div>
	)
}

export default CartItem;