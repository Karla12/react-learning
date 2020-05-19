import {
	FETCH_COVID,
	FETCH_COVID_SUCCESS,
	FETCH_COVID_FAILURE
} from '../actions/types';

const initialState = {
	data: [],
	loading: false,
	error: {
		types: null,
		status: null,
		message: null
	}
};

export const covid = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_COVID: 
			return {
				...state,
				loading: true
			};
		case FETCH_COVID_SUCCESS:
			return {
				...state,
				loading: false,
				data: {
					...action.payload
				}
			};
		case FETCH_COVID_FAILURE:
			return {
				...state,
				loading: false
			};
		default:
			return { ...state };
	}
};

export default covid;