import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	TAG_API_REQUEST,
	PICTURE_API_REQUEST,
	VIDEO_API_REQUEST,
} from '../store/constants/action-types';
import { setActualTag } from '../store/actions/tagsAction';
import { Row, Col, Button } from 'react-bootstrap';

function Tag({
	fetching,
	tags,
	error,
	actualTag,
	addSuccess,
	addError,
	getData,
	setActualTag,
	getPicture,
	getVideo,
}) {
	useEffect(() => {
		getData();
	}, [getData]);

	const handleTag = (e) => {
		let tag = e.target.innerHTML;
		setActualTag(tag);
		if (tag === 'no tag') {
			let payload = { page: 1 };
			getPicture(payload);
			getVideo(payload);
		} else {
			let payload = { tag: tag, page: 1 };
			getPicture(payload);
			getVideo(payload);
		}
	};

	return (
		<Row
			id='tag'
			style={{
				marginBottom: '50px',
			}}
		>
			<Col md={12} xs={12} className='text-center'>
				{tags === null ? (
					<p>Loading...</p>
				) : (
					tags.map((tag, i) => (
						<Button
							key={i}
							active={actualTag === tag.name ? true : false}
							variant='outline-info'
							style={{ margin: '5px' }}
							onClick={handleTag}
						>
							{tag.name}
						</Button>
					))
				)}
				<Button
					active={actualTag === 'no tag' ? true : false}
					variant='outline-danger'
					style={{ margin: '5px' }}
					onClick={handleTag}
				>
					no tag
				</Button>
			</Col>
		</Row>
	);
}

const mapStateToProps = (state) => {
	return {
		fetching: state.tags.fetching,
		tags: state.tags.tags,
		error: state.tags.error,
		actualTag: state.tags.actualTag,
		newTag: state.tags.newTag,
		addFetching: state.tags.addFetching,
		addSuccess: state.tags.addSuccess,
		addError: state.tags.addError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => dispatch({ type: TAG_API_REQUEST }),
		setActualTag: (tag) => dispatch(setActualTag(tag)),
		getPicture: (payload) =>
			dispatch({ type: PICTURE_API_REQUEST, payload: { ...payload } }),
		getVideo: (payload) =>
			dispatch({ type: VIDEO_API_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
