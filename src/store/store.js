import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../services/sagas";
import mainReducer from './mainReducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

export function configureStore(initialState) {

	const store = createStore(
		mainReducer,
		initialState,
		compose(
			applyMiddleware(...middlewares)
		)
	);

	sagaMiddleware.run(RootSaga);

	return store;

}

export default configureStore;