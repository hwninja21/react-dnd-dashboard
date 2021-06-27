import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import API from './api';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

const AppWithStore = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

API.init();
ReactDOM.render(<AppWithStore />, document.getElementById('root'));
serviceWorker.unregister();
