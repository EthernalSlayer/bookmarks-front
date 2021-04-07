import React from 'react';
import { connect } from 'react-redux';
import { ADD_TAG_REQUEST } from '../store/constants/action-types';
import { setNewTag } from '../store/actions/tagsAction';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

function Navigation({ newTag, setNewTag, addTag }) {
	const handleChange = (e) => {
		let name = e.target.value;
		setNewTag(name);
	};

	const handleNewTag = (e) => {
		e.preventDefault();
		let payload = { name: newTag };
		addTag(payload);
		setNewTag('');
	};

	return (
		<Navbar fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>
				<img
					alt=''
					src='/logo192.png'
					width='30'
					height='30'
					className='d-inline-block align-top'
				/>{' '}
				React Bookmark
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#tag'>Tag</Nav.Link>
					<Nav.Link href='#video'>Video</Nav.Link>
					<Nav.Link href='#picture'>Picture</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl
						type='text'
						placeholder='new tag'
						className='mr-sm-2'
						value={newTag}
						onChange={handleChange}
					/>
					<Button variant='outline-info' type='submit' onClick={handleNewTag}>
						Add New Tag
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}

const mapStateToProps = (state) => {
	return {
		newTag: state.tags.newTag,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTag: (payload) => dispatch({ type: ADD_TAG_REQUEST, payload }),
		setNewTag: (name) => dispatch(setNewTag(name)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
