import { put, call, all, takeEvery } from "redux-saga/effects";
import { fetchBotsInfo } from "../api/Bots";

import {
    GET_BOTS_REQUEST,
    GET_BOTS_SUCCESS,
    GET_BOTS_FAILURE,
} from '../redux/actions/Actions';


function* fetchBotsSaga(): Generator<any, void, any> {
    try {
        const response = yield call(fetchBotsInfo.fetchBotsInfoApi);
            yield put({ type: GET_BOTS_SUCCESS, payload: response })        
    } catch (error: any) {
        yield put({ type: GET_BOTS_FAILURE, payload: error })
    }
}


function* watchGetBotsSaga(): Generator<any, void, any> {
    yield takeEvery(GET_BOTS_REQUEST, fetchBotsSaga);
}

export default function* botSaga() {
    yield all([
        watchGetBotsSaga(),
    ])
}