import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { REMOVE_VIDEO_REQUEST } from '../store/constants/action-types';

function RemoveVideo({ id, videos, removeVideo }) {
	const handleRemove = (e) => {
		e.preventDefault();
		let payload = { videoToRemove: e.target.value, page: videos.page };
		removeVideo(payload);
	};

	return (
		<td>
			<Button value={id} variant='outline-danger' onClick={handleRemove}>
				X
			</Button>
		</td>
	);
}

const mapStateToProps = (state) => {
	return {
		videos: state.videos.videos,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeVideo: (payload) => dispatch({ type: REMOVE_VIDEO_REQUEST, payload }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveVideo);
