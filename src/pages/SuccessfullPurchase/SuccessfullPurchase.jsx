import React from 'react';
import { connect } from 'react-redux';
import "./SuccessfullPurchase.css";
import img from '../../assets/feed/young-horse2.png';

const SuccessfullPurchase = (props) => {
	const { cart } = props;

	return (
		<div className="SuccessfullPurchase">
			<div className="SuccessfullPurchase-top">
				<div className="SuccessfullPurchase-group">
					<div className="SuccessfullPurchase-info">
						<p>¡Compra Exitosa!</p>
						<h4>Llega hoy</h4>
					</div>
					<div className="SuccessfullPurchase-img">
						<img src="https://cdn-icons-png.flaticon.com/512/618/618067.png?w=740&t=st=1678307887~" alt="productos" />
					</div>
				</div>
			</div>
			<div className="SuccessfullPurchase-delivery">
				{ cart.map(item => 
					<div className="SuccessfullPurchase-type-delivery">
						<h4>Llega entre el 10 y el 14 de diciembre</h4>
						<div className="SuccessfullPurchase-product-info">
							<img src={item.urlImage} alt="producto" />
							<p>{item.name}</p>
						</div>
					</div>
				)}
					{ true && /*solo un vendedor*/
					<div className="SuccessfullPurchase-seller">
						<h4>Vendedor</h4>
						<p>Cristian Díaz</p>
						<button type="button" >Enviar Mensaje</button>
					</div>
				}
				<div className="SuccessfullPurchase-details">
					<button>Ver detalles de la compra</button>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
	}
}

export default connect(mapStateToProps, null)(SuccessfullPurchase);