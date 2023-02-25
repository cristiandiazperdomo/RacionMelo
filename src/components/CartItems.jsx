import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, calculateCartTotal, calculateTotalForEachProduct } from '../redux/actions/index.js';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import '../styles/CartItems.css';

const CartItem = (props) => {
	const { product, addToCart, removeFromCart, calculateCartTotal } = props;

	const calculateTotalForEachProduct = product => Math.round(product.price * product.amount);

	const handleAddToCart = product => {
		addToCart(product);
		calculateCartTotal();
	};

 	const handleRemoveItem = (id) => {
 		removeFromCart(id);
		calculateCartTotal();
	};

	return (
		<div className="CartItem-container">
			<div className="CartItem">
				<div className="CartItem-left">
					<img 
						src={product.urlImage} 
						alt={product.name} 
						className="CartItem-img"
					/>
					<div className="CartItem-description">
						<h4>{product.name}</h4>
						<p>{product.name}</p>
						<button onClick={() => handleRemoveItem(product.id)}>Eliminar</button>
					</div>
				</div>
				<div className="CartItem-description-right">
					<div className="CartItem-amount">
						<AiOutlineMinus 
							className="CartItem-minus" 
							onClick={() => handleRemoveItem(product.id)} 
						/>
						<input type="number" value={product.amount} />
						<AiOutlinePlus 
							className="CartItem-plus" 
							onClick={() => handleAddToCart(product)} 
						/>
					</div>
					<p>${product.price}</p>
					<p>${calculateTotalForEachProduct(product)}</p>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = {
	calculateTotalForEachProduct,
	calculateCartTotal,
	removeFromCart,
	addToCart,
}

export default connect(null, mapDispatchToProps)(CartItem);