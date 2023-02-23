import React, { useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MyContext } from '../context/MyContext.js';
import '../styles/CartItems.css';

const CartItem = ({ product }) => {
	const { removeFromCart, addToCart } = useContext(MyContext);

    const calculateTotalForEachProduct = product => Math.round(product.price * product.amount);

	const handleAddToCart = product => {
		addToCart(product);
	};

 	const handleRemoveItem = (id) => {
 		removeFromCart(id);
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

export default CartItem;