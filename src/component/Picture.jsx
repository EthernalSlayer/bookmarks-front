import React from 'react';
import { connect } from 'react-redux';
import { PICTURE_API_REQUEST } from '../store/constants/action-types';
import { Row, Col, Table } from 'react-bootstrap';

import AddPicture from './AddPicture';
import RemovePicture from './RemovePicture';
import EditPictureTag from './EditPictureTag';
import PicturePagination from './PicturePagination';

function Picture({ fetching, pictures, error, getData, actualTag }) {
	return (
		<>
			<Row id='picture'>
				<Col>
					<Table striped bordered hover variant='dark' responsive>
						<thead>
							<tr>
								<th colSpan='8'>Picture</th>
							</tr>
							<tr>
								<th>#</th>
								<th>URL</th>
								<th>Title</th>
								<th>Author</th>
								<th>Width</th>
								<th>Height</th>
								<th>Tag</th>
								<th>Del</th>
							</tr>
						</thead>
						<tbody>
							{pictures === null ? (
								<tr>
									<td>Loading...</td>
								</tr>
							) : (
								pictures.docs.map((picture, i) => (
									<tr key={i}>
										<td>{i}</td>
										<td>{picture.url}</td>
										<td>{picture.title}</td>
										<td>{picture.author_name}</td>
										<td>{picture.width}</td>
										<td>{picture.height}</td>
										<td>{picture.tag}</td>
										<RemovePicture id={picture._id} />
									</tr>
								))
							)}
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col className='text-center'>
					<AddPicture />
					<EditPictureTag />
				</Col>
			</Row>
			<PicturePagination />
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		fetching: state.pictures.fetching,
		pictures: state.pictures.pictures,
		error: state.pictures.error,
		actualTag: state.tags.actualTag,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: (payload) =>
			dispatch({ type: PICTURE_API_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
