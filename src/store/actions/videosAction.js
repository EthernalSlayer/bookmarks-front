import {
	ADD_VIDEO_MODAL_SHOW,
	ADD_VIDEO_MODAL_CLOSE,
	SET_VIDEO_TO_ADD,
	EDIT_VIDEO_MODAL_SHOW,
	EDIT_VIDEO_MODAL_CLOSE,
	SET_VIDEO_TO_EDIT,
	SET_VIDEO_TAG_TO_EDIT,
} from '../constants/action-types';

export function setAddVideoModalShow() {
	return { type: ADD_VIDEO_MODAL_SHOW };
}

export function setAddVideoModalClose() {
	return { type: ADD_VIDEO_MODAL_CLOSE };
}

export function setVideoToAdd(payload) {
	return { type: SET_VIDEO_TO_ADD, payload };
}

export function setEditVideoModalShow() {
	return { type: EDIT_VIDEO_MODAL_SHOW };
}

export function setEditVideoModalClose() {
	return { type: EDIT_VIDEO_MODAL_CLOSE };
}

export function setVideoToEdit(payload) {
	return { type: SET_VIDEO_TO_EDIT, payload };
}

export function setVideoTagToEdit(payload) {
	return { type: SET_VIDEO_TAG_TO_EDIT, payload };
}
