import { put, call, all, takeEvery } from "redux-saga/effects";
import { fetchPackageInfo } from "../api/Package";

import {
    GET_PACKAGES_REQUEST,
    GET_PACKAGES_SUCCESS,
    GET_PACKAGES_FAILURE,
    GET_PAID_PACKAGES_FAILURE,
    GET_PAID_PACKAGES_REQUEST,
    GET_PAID_PACKAGES_SUCCESS,
} from '../redux/actions/Actions';


function* fetchPaidPackageSaga(): Generator<any, void, any> {
    try {
        const response = yield call(fetchPackageInfo.fetchPaidPackageApi);
            yield put({ type: GET_PAID_PACKAGES_SUCCESS, payload: response })        
    } catch (error: any) {
        yield put({ type: GET_PAID_PACKAGES_FAILURE, payload: error })
    }
}


function* watchGetPaidPackagesSaga(): Generator<any, void, any> {
    yield takeEvery(GET_PAID_PACKAGES_REQUEST, fetchPaidPackageSaga);
}

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
        watchGetPaidPackagesSaga(),
    ])
}