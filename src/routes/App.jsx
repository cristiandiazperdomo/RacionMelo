import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layaout from '../containers/Layaout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import SingUp from '../pages/SingUp.jsx';
import Payment from '../pages/Payment.jsx';
import ProductView from '../pages/ProductView.jsx';
import ShipmentStation from '../pages/ShipmentStation.jsx';
import SuccessfullPurchase from '../pages/SuccessfullPurchase.jsx';
import useArrayArticles from '../hooks/useArrayArticles.js';

const App = () => {

    window.scrollTo(0, 0);

	return (			
		<HashRouter>
				<Layaout>
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/login" element={<Login />}></Route>
						<Route exact path="/singup" element={<SingUp />}></Route>
						<Route exact path="/payment" element={<Payment />}></Route>
						<Route exact path="/productview/:id" element={<ProductView />}></Route>
						<Route exact path="/shipmentstation" element={<ShipmentStation />}></Route>
						<Route exact path="/successfullpurchase" element={<SuccessfullPurchase />}></Route>
					</Routes>
				</Layaout>
		</HashRouter>
	)
}

export default App;