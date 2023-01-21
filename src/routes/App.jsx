import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layaout from '../containers/Layaout.jsx';
import Home from '../pages/Home.jsx';

const App = () => {
	return (
		<BrowserRouter>
			<Layaout>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
				</Routes>
			</Layaout>
		</BrowserRouter>
	)
}

export default App;