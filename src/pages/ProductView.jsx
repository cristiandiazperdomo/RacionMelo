import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';	
import { 
	addToCart, 
	removeFromCart, 
	calculateCartTotal,
	getImageSource,
} from '../redux/actions/index.js';
import { 
	AiOutlinePlus,
	AiOutlineMinus,
 	AiFillStar,
 	AiOutlineStar 
} from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import '../styles/ProductView.css';

const ProductView = (props) => {
	const [product, setProduct] = useState([]);
	const [productAmount, setProductAmount] = useState(0);
	const { 
		articles,
		cart,
		addToCart,
		removeFromCart,
	} = props;

	const { id } = useParams();

	useEffect(() => {
		const isAlreadyInCart = cart.some(item => item.id === Number(id) + 1); //is the product in cart?
		if (isAlreadyInCart) {
			const productos2 = cart.map(item => { // get from cart
			if (item.id === Number(id) + 1) {
				setProduct(item);
				setProductAmount(item.amount);
			}
		})
		} else {
			const productos2 = articles.map(item => { // get from articles
				if (item.id === Number(id) + 1) {
					setProduct(item);
				}
			})
		}
	}, [id, cart, articles, product]);

	const handleAddToCart = product => {
		addToCart(product);
		setProductAmount(productAmount + 1)
		calculateCartTotal();
	};

	const handleRemoveItem = id => {
		removeFromCart(id);
		setProductAmount(productAmount - 1)
		calculateCartTotal();
	};


	const { 
		name,
		urlImage,
		easyDescription,
		complexDescription,
		price,
		amount,  
	} = product;

	return (
		<div className="ProductView">
			<div className="Categories-routes">
				<p><span>Animales</span> / <span>Perros</span> / <span>Adultos</span> / <span>Poppy Chown</span></p>
			</div>
			<div className="ProductView-container">
				<div className="ProductView-left">
					<div className="ProductView-left-top">
						<img src={urlImage} alt="producto" />
					</div>
					<div className="ProductView-left-bottom">
						<ul className="ProductView-left-bottom-extras">
							<li>
								<img src={urlImage} alt="producto" />
							</li>
							<li>
								<img src={urlImage} alt="producto" />
							</li>
							<li>
								<img src={urlImage} alt="producto" />
							</li>
							<li>
								<img src={urlImage} alt="producto" />
							</li>
						</ul>
					</div>
				</div>
				<div className="ProductView-right">
					<div className="ProductView-right-top">
						<div className="ProductView-info">
							<h3 className="ProductView-info-title">{name}</h3>
							<p className="ProductView-info-description">
								{easyDescription}
							</p>
							<div className="ProductView-opinions">
								<AiFillStar/>
								<AiFillStar/>
								<AiFillStar/>
								<AiFillStar/>
								<AiOutlineStar/>
								<span>(400)</span>
							</div>
						</div>
						<div className="ProductView-price">
							<h4>${price}</h4>
							<p>No pagas el primer mes</p>
						</div>
						<div className="ProductView-options">
							<div className="ProductView-amount">
								<div className="ProductView-amount-container">
									<i onClick={() => handleRemoveItem(product.id)} >
										<AiOutlineMinus 
											className="CartItem-minus view" />
									</i>	
									<input type="number" value={productAmount} />
									<i onClick={() => handleAddToCart(product)} >
										<AiOutlinePlus
											className="CartItem-plus view"
										/>
									</i>
								</div>
								<div className="ProductView-soldout">
									<p>Solo <span>12 productos</span> para agotarse!</p>
									<p>No te lo pierdas</p>
								</div>
							</div>
							<div className="ProductView-goToPay">
								<Link to="/payment">
									<button 
										type="button" 
										onClick={() => productAmount === 0 ? handleAddToCart(product) : false }>
											Comprar Ahora
									</button>
								</Link>
								<button type="button" onClick={() => handleAddToCart(product)}>Añadir al carrito</button>
							</div>
						</div>
						<div className="ProductView-secondary-info">
							<div className="ProductView-delivery">
								<div className="ProductView-delivery-description">
									<div className="ProductView-delivery-img">
										<i>
											<FaTruck />
										</i>
										<div>
											<h5>Entrega gratis</h5>
											<p>Por compras mayores a $200</p>
										</div>
									</div>
									<div className="ProductView-delivery-img">
										<i>
											<FaTruck />
										</i>
										<div>
											<h5>Devolución</h5>
											<p>Gratis los primero 30 dias. Detalles</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		articles: state.articles,
		cart: state.cart
	}
}

const mapDispatchToProps = {
	addToCart,
	removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);