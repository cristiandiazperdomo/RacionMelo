import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import CartItem from '../components/CartItems.jsx';
import '../styles/Cart.css';

const Cart = () => {
	const { petFood } = useContext(MyContext); 

	return (
		<div className="Cart">
			<div className="Cart-container">
				<div className="Cart-left-side">
					<header>
						<h3>
							Carrito de compras
						</h3>
						<h3>
							3 Items
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
						{petFood.cart.map(product => (
							<CartItem product={product} />
						))
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
							<p>ITEM 3</p>
							<p>$457</p>
						</div>
						<div className="resume-mid">
							<p>ENVÍO</p>
							<input type="text" value="Envío Estandar - $5.00" />
						</div>
						<div className="resume-mid">
							<p>CÓDIGO DE PROMOCIÓN</p>
							<input type="text" value="Envío Estandar - $5.00" />
						</div>
						<button>ENVÍAR</button>
					</div>
					<footer className="Cart-right-side-footer">
						<div className="Cart-right-side-bottom-div">
							<p>COSTO TOTAL</p>
							<p>$462.98</p>
						</div>
						<button>CONFIRMAR</button>
					</footer>
				</div>
			</div>
		</div>		
	)
}

export default Cart;