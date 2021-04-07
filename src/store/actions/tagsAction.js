import { SET_ACTUAL_TAG, SET_NEW_TAG } from '../constants/action-types';

export function setActualTag(payload) {
	return { type: SET_ACTUAL_TAG, payload };
}

export function setNewTag(payload) {
	return { type: SET_NEW_TAG, payload };
}
