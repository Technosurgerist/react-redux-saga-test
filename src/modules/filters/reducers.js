import {combineReducers} from "redux";

import {
    setFilters,
    setActiveFilter,
} from "./actions";

function list(state = null, {type, payload}) {
    switch (type) {
        case setFilters.TRIGGER:
            return payload;
        default:
            return state;
    }
}
function active(state = {licenses:'All', query: null}, {type, payload}) {
    switch (type) {
        case setActiveFilter.TRIGGER:
            return payload;
        default:
            return state;
    }
}

export default combineReducers({
    active,
    list,
});
