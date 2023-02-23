import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import CartItem from '../components/CartItems.jsx';
import EmptyShoppingCart from '../assets/logos/dog-empty-shopping-cart.png';
import '../styles/Cart.css';

const Cart = () => {
	const [isCart, setIsCart] = useState(false);
	const { petFood } = useContext(MyContext); 

	useEffect(() => {
		petFood.cart.length > 0 ? setIsCart(true) : setIsCart(false);
	}, [petFood.cart])

	return (
		<div className="Cart">
			<div className="Cart-container">
				<div className="Cart-left-side">
					<header>
						<h3>
							Carrito de compras
						</h3>
						<h3>
							{isCart ? petFood.cart.length : 'Sin'} items
						</h3>
					</header>
					<div className="Cart-list">
						<div className="Cart-list-info">
							<div className="Cart-list-info-left">
								<p>DETALLES DEL PRODUCTO</p>
							</div>
							<div className="Cart-list-info-right">
								<p>CANTIDAD</p>
								<p>PRECIO</p>
								<p>TOTAL</p>
							</div>
						</div>
						<div className="Cart-products">
						{isCart ? 
							petFood.cart.map(product => (
								<CartItem product={product} key={product.id}/>
							))
						: 	<img src={EmptyShoppingCart} alt="sin productos en el carrito" className="cart-no-products" />
						}
						</div>
					</div>
					<footer className="Cart-list-go-back">
						<HiOutlineArrowNarrowLeft />
						<Link to="/">Continuar Comprando</Link>
					</footer>
				</div>
				<div className="Cart-right-side">
					<header>
						<h3>Resumen de Orden</h3>
					</header>
					<div className="resume">
						<div className="resume-top">
							<p>{isCart ? petFood.cart.length : 'Sin'} items</p>
							<p>${isCart ? petFood.total : 0 }</p>
						</div>
						<div className="resume-mid">
							<p>ENVÍO</p>
							<input type="text" value="Envío Estandar - $40.00" />
						</div>
						<div className="resume-mid">
							<p>CÓDIGO DE PROMOCIÓN</p>
							<input type="text" value="Envío Estandar - $40.00" />
						</div>
						<button>ENVÍAR</button>
					</div>
					<footer className="Cart-right-side-footer">
						<div className="Cart-right-side-bottom-div">
							<p>COSTO TOTAL</p>
							<p>${isCart ? petFood.totalPlusShipping : 0 }</p>
						</div>
						<button>CONFIRMAR</button>
					</footer>
					</div>
			</div>
		</div>		
	)
}

export default Cart;