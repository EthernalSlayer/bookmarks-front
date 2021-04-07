import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import {
	setAddVideoModalShow,
	setAddVideoModalClose,
	setVideoToAdd,
} from '../store/actions/videosAction';
import { ADD_VIDEO_REQUEST } from '../store/constants/action-types';

function AddVideos({
	videos,
	addModalShow,
	videoToAdd,
	handleShow,
	handleClose,
	setVideoToAdd,
	addVideo,
}) {
	const handlChange = (e) => {
		let url = e.target.value;
		setVideoToAdd(url);
	};

	const handleNewVideo = (e) => {
		e.preventDefault();
		let payload = { videoToAdd: videoToAdd, page: videos.page };
		addVideo(payload);
		setVideoToAdd('');
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
					<Modal.Title>Add a video bookmark</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: '#343a40', color: 'white' }}>
					<Form>
						<Form.Group>
							<Form.Label>url :</Form.Label>
							<Form.Control
								type='text'
								value={videoToAdd}
								placeholder='https://www.exemple.com'
								onChange={handlChange}
							/>
						</Form.Group>
						<Button
							variant='outline-info'
							type='submit'
							onClick={handleNewVideo}
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
		videos: state.videos.videos,
		addModalShow: state.videos.addModalShow,
		videoToAdd: state.videos.videoToAdd,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleShow: () => dispatch(setAddVideoModalShow()),
		handleClose: () => dispatch(setAddVideoModalClose()),
		setVideoToAdd: (video) => dispatch(setVideoToAdd(video)),
		addVideo: (payload) =>
			dispatch({ type: ADD_VIDEO_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVideos);
