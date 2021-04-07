import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Pagination } from 'react-bootstrap';
import { VIDEO_API_REQUEST } from '../store/constants/action-types';

function VideoPagination({ videos, actualTag, getVideos }) {
	const nextPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: videos.nextPage };
			getVideos(payload);
		} else {
			let payload = { tag: actualTag, page: videos.nextPage };
			getVideos(payload);
		}
	};

	const prevPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: videos.prevPage };
			getVideos(payload);
		} else {
			let payload = { tag: actualTag, page: videos.prevPage };
			getVideos(payload);
		}
	};

	const firstPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: 1 };
			getVideos(payload);
		} else {
			let payload = { tag: actualTag, page: 1 };
			getVideos(payload);
		}
	};

	const lastPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: videos.totalPages };
			getVideos(payload);
		} else {
			let payload = { tag: actualTag, page: videos.totalPages };
			getVideos(payload);
		}
	};

	return (
		<Row style={{ marginTop: '20px' }}>
			<Col>
				<Pagination className='justify-content-center'>
					{videos ? (
						<>
							<Pagination.First onClick={firstPage} />
							<Pagination.Prev
								onClick={prevPage}
								disabled={videos.prevPage !== null ? false : true}
							/>
							<Pagination.Next
								onClick={nextPage}
								disabled={videos.nextPage !== null ? false : true}
							/>
							<Pagination.Last onClick={lastPage} />
						</>
					) : (
						<p>Loading...</p>
					)}
				</Pagination>
			</Col>
		</Row>
	);
}

const mapStateToProps = (state) => {
	return {
		videos: state.videos.videos,
		actualTag: state.tags.actualTag,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getVideos: (payload) =>
			dispatch({ type: VIDEO_API_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPagination);
