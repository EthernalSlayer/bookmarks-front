import {
	ADD_PICTURE_MODAL_SHOW,
	ADD_PICTURE_MODAL_CLOSE,
	SET_PICTURE_TO_ADD,
	EDIT_PICTURE_MODAL_SHOW,
	EDIT_PICTURE_MODAL_CLOSE,
	SET_PICTURE_TO_EDIT,
	SET_PICTURE_TAG_TO_EDIT,
} from '../constants/action-types';

export function setAddPictureModalShow() {
	return { type: ADD_PICTURE_MODAL_SHOW };
}

export function setAddPictureModalClose() {
	return { type: ADD_PICTURE_MODAL_CLOSE };
}

export function setPictureToAdd(payload) {
	return { type: SET_PICTURE_TO_ADD, payload };
}

export function setEditPictureModalShow() {
	return { type: EDIT_PICTURE_MODAL_SHOW };
}

export function setEditPictureModalClose() {
	return { type: EDIT_PICTURE_MODAL_CLOSE };
}

export function setPictureToEdit(payload) {
	return { type: SET_PICTURE_TO_EDIT, payload };
}

export function setPictureTagToEdit(payload) {
	return { type: SET_PICTURE_TAG_TO_EDIT, payload };
}
