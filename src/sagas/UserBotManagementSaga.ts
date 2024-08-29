import { put, call, all, takeEvery } from "redux-saga/effects";
import { chatbotManagement } from "../api/Bots";

import {
    GET_BOTS_REQUEST,
    GET_BOTS_SUCCESS,
    GET_BOTS_FAILURE,
    RECHARGE_BOT_FAILURE,
    RECHARGE_BOT_REQUEST,
    RECHARGE_BOT_SUCCESS,
    RETRAIN_BOT_FAILURE,
    RETRAIN_BOT_REQUEST,
    RETRAIN_BOT_SUCCESS,
} from '../redux/actions/Actions';
import { showToast } from "../components/ToastComponent";


function* fetchBotsSaga(): Generator<any, void, any> {
    try {
        const response = yield call(chatbotManagement.fetchBotsInfoApi);
        yield put({ type: GET_BOTS_SUCCESS, payload: response })
    } catch (error: any) {
        yield put({ type: GET_BOTS_FAILURE, payload: error })
    }
}

function* rechargeBotSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(chatbotManagement.rechargeBotQuotaApi, action.payload)
        yield put({ type: RECHARGE_BOT_SUCCESS, payload: response })
        yield put({ type: GET_BOTS_REQUEST, payload: response })
        showToast('success', response.message || 'Success');


    } catch (error: any) {
        yield put({ type: RECHARGE_BOT_FAILURE, payload: error })
        showToast('error', error.message || 'Failed');

    }
}
function* retrainBotSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(chatbotManagement.retrainBotApi, action.payload);
        yield put({ type: RETRAIN_BOT_SUCCESS, payload: response })
        showToast('success', response.message || 'Success');
    } catch (error: any) {
        yield put({ type: RETRAIN_BOT_FAILURE, payload: error })
        showToast('error', error.message || 'Failed');
    }
}

function* watchRetrainBotSaga(): Generator<any, void, any> {
    yield takeEvery(RETRAIN_BOT_REQUEST, retrainBotSaga);
}

function* watchRechargeBotSaga(): Generator<any, void, any> {
    yield takeEvery(RECHARGE_BOT_REQUEST, rechargeBotSaga);
}

function* watchGetBotsSaga(): Generator<any, void, any> {
    yield takeEvery(GET_BOTS_REQUEST, fetchBotsSaga);
}

export default function* botSaga() {
    yield all([
        watchGetBotsSaga(),
        watchRechargeBotSaga(),
        watchRetrainBotSaga(),
    ])
}