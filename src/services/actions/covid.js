import {
	FETCH_COVID,
	FETCH_COVID_SUCCESS,
	FETCH_COVID_FAILURE
} from './types';

export const fetchCovid = (information) => {
	return {
		type: FETCH_COVID,
		payload: information
	}
};

export const fetchCovidSuccess = (information) => {
	return {
		type: FETCH_COVID_SUCCESS,
		payload: {
			...information.data,
			information
      	}
	}
};

export const fetchCovidFailure = (error) => {
	return {
		type: FETCH_COVID_FAILURE,
		payload: error
	}
};

export default fetchCovid;