import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Picture from './component/Picture';
import Video from './component/Video';
import Tag from './component/Tag';
import Navigation from './component/Navigation';
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

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<header className='App-header'>
					<Navigation />
				</header>
				<Container
					style={{
						marginTop: '100px',
					}}
				>
					<Tag />
					<Video />
					<Picture />
				</Container>
			</Provider>
		</div>
	);
}

export default App;
