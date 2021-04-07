import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { REMOVE_PICTURE_REQUEST } from '../store/constants/action-types';

function RemovePicture({ id, pictures, removePicture }) {
	const handleRemove = (e) => {
		e.preventDefault();
		let payload = { pictureToRemove: e.target.value, page: pictures.page };
		removePicture(payload);
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
		pictures: state.pictures.pictures,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removePicture: (payload) =>
			dispatch({ type: REMOVE_PICTURE_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RemovePicture);
