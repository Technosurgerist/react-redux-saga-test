import {call, put, takeEvery, select} from "redux-saga/effects";

import {repositoriesRequest} from "../../services/repos";
import {getRepos} from "./actions";
import {setFilters} from "../filters/actions";

// const getReposList = (state) => state.repos;

function* getReposHandler({payload:{query,options,sort}}) {
    try {
        const result = yield call(repositoriesRequest, query,options,sort);
        // get licenses list
        if (result.items) {
            const licenses = result.items.reduce(function(list,current) {
                if (current.license && list.indexOf(current.license.key) == -1) {
                    list.push(current.license.key);
                } else if (!current.license && list.indexOf('Not defined') == -1) {
                    list.push('Not defined');
                }
                return list;
            }, ['All']);
            yield put(setFilters.trigger(licenses));
        }
        yield put(getRepos.success(result));
    } catch(error) {
        console.error('getReposHandler error:',error);
        yield put(getRepos.failure(error));
    }
}

export default function* () {
	yield takeEvery(getRepos.TRIGGER, getReposHandler);
}
