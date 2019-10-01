import {combineReducers} from "redux";
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form';

import repos from "./repos/reducers";
import filters from "./filters/reducers";

const appReducer = combineReducers({
	routing,
	filters,
	form,
	repos,
});

const rootReducer = (state, action) => {
	return appReducer(state, action)
};

export default rootReducer;
