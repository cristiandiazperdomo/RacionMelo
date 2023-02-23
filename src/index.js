import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './routes/App.jsx';
import './styles/global.css';

const appElement = document.getElementById('app');
const root = createRoot(appElement)

root.render(
	<Provider store={store} >
		<App />
	</Provider> 
)