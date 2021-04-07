import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';

import {
	setEditVideoModalShow,
	setEditVideoModalClose,
	setVideoToEdit,
	setVideoTagToEdit,
} from '../store/actions/videosAction';
import { UPDATE_VIDEO_REQUEST } from '../store/constants/action-types';

function EditVideoTag({
	tags,
	updateError,
	videos,
	videoToEdit,
	videoTagToEdit,
	editModalShow,
	handleShow,
	handleClose,
	setVideoToEdit,
	setVideoTagToEdit,
	updateVideo,
}) {
	const handleVideo = (e) => {
		let video = e.target.value;
		setVideoToEdit(video);
	};

	const handleTag = (e) => {
		let tag = e.target.value;
		setVideoTagToEdit(tag);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		let payload = {
			video: videoToEdit,
			tag: videoTagToEdit,
			page: videos.page,
		};
		updateVideo(payload);
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
							<Form.Label>video :</Form.Label>
							<Form.Control as='select' onChange={handleVideo}>
								<option value=''>choose a video</option>
								{videos ? (
									videos.docs.map((video, i) => (
										<option key={i} value={video._id}>
											{video.title}
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
		videos: state.videos.videos,
		editModalShow: state.videos.editModalShow,
		videoToEdit: state.videos.videoToEdit,
		videoTagToEdit: state.videos.videoTagToEdit,
		updateError: state.videos.updateError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleShow: () => dispatch(setEditVideoModalShow()),
		handleClose: () => dispatch(setEditVideoModalClose()),
		setVideoToEdit: (video) => dispatch(setVideoToEdit(video)),
		setVideoTagToEdit: (tag) => dispatch(setVideoTagToEdit(tag)),
		updateVideo: (payload) =>
			dispatch({ type: UPDATE_VIDEO_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditVideoTag);
