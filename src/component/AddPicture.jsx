import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import {
	setAddPictureModalShow,
	setAddPictureModalClose,
	setPictureToAdd,
} from '../store/actions/picturesAction';
import { setActualTag } from '../store/actions/tagsAction';
import { ADD_PICTURE_REQUEST } from '../store/constants/action-types';

function AddPicture({
	pictures,
	addModalShow,
	pictureToAdd,
	handleShow,
	handleClose,
	setPictureToAdd,
	addPicture,
	setActualTag,
}) {
	const handlChange = (e) => {
		let url = e.target.value;
		setPictureToAdd(url);
	};

	const handleNewPicture = (e) => {
		e.preventDefault();
		let payload = { pictureToAdd: pictureToAdd, page: pictures.page };
		addPicture(payload);
		setPictureToAdd('');
		setActualTag('no tag');
		handleClose();
	};

	return (
		<>
			<Button
				variant='outline-info'
				style={{ margin: '5px' }}
				onClick={handleShow}
			>
				Add
			</Button>
			<Modal show={addModalShow} onHide={handleClose} size='lg' centered>
				<Modal.Header
					style={{ backgroundColor: '#454d55', color: 'white' }}
					closeButton
				>
					<Modal.Title>Add a picture bookmark</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Form>
						<Form.Group>
							<Form.Label>url :</Form.Label>
							<Form.Control
								type='text'
								value={pictureToAdd}
								placeholder='www.exemple.com'
								onChange={handlChange}
							/>
						</Form.Group>
						<Button
							variant='outline-info'
							type='submit'
							onClick={handleNewPicture}
						>
							Add
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
		pictures: state.pictures.pictures,
		addModalShow: state.pictures.addModalShow,
		pictureToAdd: state.pictures.pictureToAdd,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleShow: () => dispatch(setAddPictureModalShow()),
		handleClose: () => dispatch(setAddPictureModalClose()),
		setPictureToAdd: (video) => dispatch(setPictureToAdd(video)),
		setActualTag: (tag) => dispatch(setActualTag(tag)),
		addPicture: (payload) =>
			dispatch({ type: ADD_PICTURE_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPicture);
