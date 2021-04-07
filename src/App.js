import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Picture from './component/Picture';
import Video from './component/Video';
import Tag from './component/Tag';
import Navigation from './component/Navigation';

function App() {
	return (
		<div className='App'>
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
		</div>
	);
}

export default App;
