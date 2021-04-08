import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import {
	PICTURE_API_REQUEST,
	VIDEO_API_REQUEST,
	TAG_API_REQUEST,
} from './store/constants/action-types';

store.dispatch({ type: PICTURE_API_REQUEST, payload: { page: 1 } });
store.dispatch({ type: VIDEO_API_REQUEST, payload: { page: 1 } });
store.dispatch({ type: TAG_API_REQUEST });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
