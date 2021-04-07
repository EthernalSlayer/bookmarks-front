import {
	PICTURE_API_REQUEST,
	PICTURE_API_SUCCESS,
	PICTURE_API_ERROR,
	ADD_PICTURE_MODAL_SHOW,
	ADD_PICTURE_MODAL_CLOSE,
	SET_PICTURE_TO_ADD,
	ADD_PICTURE_REQUEST,
	ADD_PICTURE_SUCCESS,
	ADD_PICTURE_ERROR,
	REMOVE_PICTURE_REQUEST,
	REMOVE_PICTURE_SUCCESS,
	REMOVE_PICTURE_ERROR,
	EDIT_PICTURE_MODAL_SHOW,
	EDIT_PICTURE_MODAL_CLOSE,
	SET_PICTURE_TO_EDIT,
	SET_PICTURE_TAG_TO_EDIT,
	UPDATE_PICTURE_REQUEST,
	UPDATE_PICTURE_SUCCESS,
	UPDATE_PICTURE_ERROR,
} from '../constants/action-types';

const initialState = {
	fetching: false,
	pictures: null,
	error: null,
	addModalShow: false,
	pictureToAdd: '',
	addFetching: false,
	addSuccess: null,
	addError: null,
	removeFetching: false,
	removeSuccess: null,
	removeError: null,
	editModalShow: false,
	pictureToEdit: null,
	pictureTagToEdit: null,
	updateFetching: false,
	updateSuccess: null,
	updateError: null,
};

export function picturesReducer(state = initialState, action) {
	switch (action.type) {
		case PICTURE_API_REQUEST:
			return { ...state, fetching: true, error: null };
		case PICTURE_API_SUCCESS:
			return { ...state, fetching: false, pictures: action.pictures };
		case PICTURE_API_ERROR:
			return { ...state, fetching: false, pictures: null, error: action.error };
		case ADD_PICTURE_MODAL_SHOW:
			return { ...state, addModalShow: true };
		case ADD_PICTURE_MODAL_CLOSE:
			return { ...state, addModalShow: false };
		case SET_PICTURE_TO_ADD:
			return { ...state, pictureToAdd: action.payload };
		case ADD_PICTURE_REQUEST:
			return { ...state, addFetching: true, addSuccess: null, addError: null };
		case ADD_PICTURE_SUCCESS:
			return { ...state, addFetching: false, addSuccess: action.message };
		case ADD_PICTURE_ERROR:
			return { ...state, addFetching: false, addError: action.error };
		case REMOVE_PICTURE_REQUEST:
			return {
				...state,
				removeFetching: true,
				removeSuccess: null,
				removeError: null,
			};
		case REMOVE_PICTURE_SUCCESS:
			return { ...state, removeFetching: false, removeSuccess: action.message };
		case REMOVE_PICTURE_ERROR:
			return { ...state, removeFetching: false, removeError: action.error };
		case EDIT_PICTURE_MODAL_SHOW:
			return { ...state, editModalShow: true };
		case EDIT_PICTURE_MODAL_CLOSE:
			return { ...state, editModalShow: false };
		case SET_PICTURE_TO_EDIT:
			return { ...state, pictureToEdit: action.payload };
		case SET_PICTURE_TAG_TO_EDIT:
			return { ...state, pictureTagToEdit: action.payload };
		case UPDATE_PICTURE_REQUEST:
			return {
				...state,
				updateFetching: true,
				updateSuccess: null,
				updateError: null,
			};
		case UPDATE_PICTURE_SUCCESS:
			return { ...state, updateFetching: false, updateSuccess: action.message };
		case UPDATE_PICTURE_ERROR:
			return { ...state, updateFetching: false, updateError: action.error };
		default:
			return state;
	}
}
