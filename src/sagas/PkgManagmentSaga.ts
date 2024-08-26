import { put, call, all, takeEvery } from "redux-saga/effects";
import { fetchPackageInfo } from "../api/Package";

import {
    GET_PACKAGES_REQUEST,
    GET_PACKAGES_SUCCESS,
    GET_PACKAGES_FAILURE,
} from '../redux/actions/Actions';


function* fetchPackageSaga(): Generator<any, void, any> {
    try {
        const response = yield call(fetchPackageInfo.fetchPackageApi);
            yield put({ type: GET_PACKAGES_SUCCESS, payload: response })        
    } catch (error: any) {
        yield put({ type: GET_PACKAGES_FAILURE, payload: error })
    }
}


function* watchGetPackagesSaga(): Generator<any, void, any> {
    yield takeEvery(GET_PACKAGES_REQUEST, fetchPackageSaga);
}

export default function* pkgSaga() {
    yield all([
        watchGetPackagesSaga(),
    ])
}