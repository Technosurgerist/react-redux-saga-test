import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {routerMiddleware} from "react-router-redux";
import sagas from "../modules/sagas";
import reducer from "../modules/reducers";

const sagaMiddleware = createSagaMiddleware();

export default (initialState, history) => {
	const middlewares = [sagaMiddleware, routerMiddleware(history)];

	const store = createStore(
		reducer,
		initialState,
		composeWithDevTools(
			applyMiddleware(...middlewares),
		),
	);
	sagas.map(sagaMiddleware.run);
	return store;
};
