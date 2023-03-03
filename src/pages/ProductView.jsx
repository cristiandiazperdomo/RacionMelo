import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, calculateCartTotal } from '../redux/actions/index.js';
import { AiOutlinePlus, AiOutlineMinus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import '../styles/ProductView.css';

const ProductView = (props) => {
	const { articles } = props;
	const { ...product } = articles[0];
	
	const { 
		id,
		name,
		urlImage,
		easyDescription,
		complexDescription,
		price,
		amount,  
	} = product;

	const { addToCart, removeFromCart } = props;

	const handleAddToCart = product => {
		addToCart(product);
		calculateCartTotal();
	};

	const handleRemoveItem = id => {
		handleRemoveItem(id);
		calculateCartTotal();
	};

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
									<i>
										<AiOutlineMinus 
										className="CartItem-minus view" 
										onClick={() => handleRemoveItem(product.id)} 
										/>
									</i>	
									<input type="number" value={product.amount} />
									<i>
										<AiOutlinePlus
											className="CartItem-plus view" 
											onClick={() => handleAddToCart(product)} 
										/>
									</i>
								</div>
								<div className="ProductView-soldout">
									<p>Solo <span>12 productos</span> para agotarse!</p>
									<p>No te lo pierdas</p>
								</div>
							</div>
							<div className="ProductView-goToPay">
								<button type="button" onClick={() => handleAddToCart(product)}>Comprar Ahora</button>
								<button type="button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
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
	}
}

const mapDispatchToProps = {
	addToCart,
	removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);