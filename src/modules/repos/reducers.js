import {combineReducers} from "redux";

import {
    getRepos,
} from "./actions";

function list(state = null, {type, payload}) {
    switch (type) {
        case getRepos.SUCCESS:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
}
function fetching(state = null, {type, payload}) {
    switch (type) {
        case getRepos.SUCCESS:
        case getRepos.FAILURE:
            return null;
        case getRepos.TRIGGER:
            return true;
        default:
            return state;
    }
}

export default combineReducers({
    list,
    fetching,
});
