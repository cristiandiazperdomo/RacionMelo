import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layaout from '../containers/Layaout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import SingUp from '../pages/SingUp.jsx';

const App = () => {
	return (
		<HashRouter>
			<Layaout>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/login" element={<Login />}></Route>
					<Route exact path="/singup" element={<SingUp />}></Route>
				</Routes>
			</Layaout>
		</HashRouter>
	)
}

export default App;