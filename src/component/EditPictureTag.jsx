import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';

import {
	setEditPictureModalShow,
	setEditPictureModalClose,
	setPictureToEdit,
	setPictureTagToEdit,
} from '../store/actions/picturesAction';
import { UPDATE_PICTURE_REQUEST } from '../store/constants/action-types';

function EditPictureTag({
	tags,
	pictures,
	pictureToEdit,
	pictureTagToEdit,
	editModalShow,
	handleShow,
	handleClose,
	setPictureToEdit,
	setPictureTagToEdit,
	updatePicture,
}) {
	const handlePicture = (e) => {
		let picture = e.target.value;
		setPictureToEdit(picture);
	};

	const handleTag = (e) => {
		let tag = e.target.value;
		setPictureTagToEdit(tag);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		let payload = {
			picture: pictureToEdit,
			tag: pictureTagToEdit,
			page: pictures.page,
		};
		updatePicture(payload);
		handleClose();
	};

	return (
		<>
			<Button
				variant='outline-info'
				style={{ margin: '5px' }}
				onClick={handleShow}
			>
				Edit
			</Button>
			<Modal show={editModalShow} onHide={handleClose} size='lg' centered>
				<Modal.Header
					style={{ backgroundColor: '#454d55', color: 'white' }}
					closeButton
				>
					<Modal.Title>change a bookmark tag</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Form>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>picture :</Form.Label>
							<Form.Control as='select' onChange={handlePicture}>
								<option value=''>choose a picture</option>
								{pictures ? (
									pictures.docs.map((picture, i) => (
										<option key={i} value={picture._id}>
											{picture.title}
										</option>
									))
								) : (
									<option value=''>Loading...</option>
								)}
							</Form.Control>
						</Form.Group>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>tag :</Form.Label>
							<Form.Control as='select' onChange={handleTag}>
								<option value=''>no tag</option>
								{tags ? (
									tags.map((tag, i) => (
										<option key={i} value={tag.name}>
											{tag.name}
										</option>
									))
								) : (
									<option value=''>Loading...</option>
								)}
							</Form.Control>
						</Form.Group>
						<Button variant='outline-info' type='submit' onClick={handleEdit}>
							Edit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Button variant='outline-danger' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		tags: state.tags.tags,
		pictures: state.pictures.pictures,
		editModalShow: state.pictures.editModalShow,
		pictureToEdit: state.pictures.pictureToEdit,
		pictureTagToEdit: state.pictures.pictureTagToEdit,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleShow: () => dispatch(setEditPictureModalShow()),
		handleClose: () => dispatch(setEditPictureModalClose()),
		setPictureToEdit: (picture) => dispatch(setPictureToEdit(picture)),
		setPictureTagToEdit: (tag) => dispatch(setPictureTagToEdit(tag)),
		updatePicture: (payload) =>
			dispatch({ type: UPDATE_PICTURE_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPictureTag);
