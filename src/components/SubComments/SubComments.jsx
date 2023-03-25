import React from 'react';
import { TbChevronDownRight, TbAxisX, TbCornerDownRight, TbCurrencyLeu} from "react-icons/tb"; 
import "./SubComments.css";

const SubComments = () => {
	return (
		<div className="SubComment">
			<TbCurrencyLeu />
			<div className="SubComment_container">
				<p>Comprendo. Los envíos gratis aplican a publicaciones mayores a 2000 pesos (como esta publicación), no aplica en carritos mayores a 2000. La plataforma de todas formas calculará un costo de envío. Quedamos a las órdenes.</p>
			</div>
		</div>
	)
}

export default SubComments;