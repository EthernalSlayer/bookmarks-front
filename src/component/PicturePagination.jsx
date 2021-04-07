import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Pagination } from 'react-bootstrap';
import { PICTURE_API_REQUEST } from '../store/constants/action-types';

function PicturePagination({ pictures, actualTag, getPictures }) {
	const nextPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: pictures.nextPage };
			getPictures(payload);
		} else {
			let payload = { tag: actualTag, page: pictures.nextPage };
			getPictures(payload);
		}
	};

	const prevPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: pictures.prevPage };
			getPictures(payload);
		} else {
			let payload = { tag: actualTag, page: pictures.prevPage };
			getPictures(payload);
		}
	};

	const firstPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: 1 };
			getPictures(payload);
		} else {
			let payload = { tag: actualTag, page: 1 };
			getPictures(payload);
		}
	};

	const lastPage = () => {
		if (actualTag === 'no tag') {
			let payload = { page: pictures.totalPages };
			getPictures(payload);
		} else {
			let payload = { tag: actualTag, page: pictures.totalPages };
			getPictures(payload);
		}
	};

	return (
		<Row style={{ marginTop: '20px' }}>
			<Col>
				<Pagination className='justify-content-center'>
					{pictures ? (
						<>
							<Pagination.First onClick={firstPage} />
							<Pagination.Prev
								onClick={prevPage}
								disabled={pictures.prevPage !== null ? false : true}
							/>
							<Pagination.Next
								onClick={nextPage}
								disabled={pictures.nextPage !== null ? false : true}
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
		pictures: state.pictures.pictures,
		actualTag: state.tags.actualTag,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPictures: (payload) =>
			dispatch({ type: PICTURE_API_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PicturePagination);
