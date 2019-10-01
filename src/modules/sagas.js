import {routinePromiseWatcherSaga} from "redux-saga-routines";
import repos from "./repos/saga";

export default [
	repos,
	routinePromiseWatcherSaga,
];
