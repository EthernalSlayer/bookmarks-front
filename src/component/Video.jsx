import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { VIDEO_API_REQUEST } from '../store/constants/action-types';
import { Row, Col, Table } from 'react-bootstrap';

import AddVideos from './AddVideos';
import RemoveVideo from './RemoveVideo';
import EditVideoTag from './EditVideoTag';
import VideoPagination from './VideoPagination';

function Video({ fetching, videos, error, getData }) {
	useEffect(() => {
		let payload = { page: 1 };
		getData(payload);
	}, [getData]);

	return (
		<>
			<Row id='video'>
				<Col>
					<Table striped bordered hover variant='dark' responsive>
						<thead>
							<tr>
								<th colSpan='10'>Video</th>
							</tr>
							<tr>
								<th>#</th>
								<th>URL</th>
								<th>Title</th>
								<th>Author</th>
								<th>Add date</th>
								<th>Width</th>
								<th>Height</th>
								<th>Duration</th>
								<th>Tag</th>
								<th>Del</th>
							</tr>
						</thead>
						<tbody>
							{videos === null ? (
								<tr>
									<td>Loading...</td>
								</tr>
							) : (
								videos.docs.map((video, i) => (
									<tr key={video._id}>
										<td>{i}</td>
										<td>
											{video.provider_url}
											{video.video_id}
										</td>
										<td>{video.title}</td>
										<td>{video.author_name}</td>
										<td>{video.upload_date}</td>
										<td>{video.width}</td>
										<td>{video.height}</td>
										<td>{video.duration}</td>
										<td>{video.tag}</td>
										<RemoveVideo id={video._id} />
									</tr>
								))
							)}
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row>
				<Col className='text-center'>
					<AddVideos />
					<EditVideoTag />
				</Col>
			</Row>
			<VideoPagination />
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		fetching: state.videos.fetching,
		videos: state.videos.videos,
		error: state.videos.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: (payload) =>
			dispatch({ type: VIDEO_API_REQUEST, payload: { ...payload } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
