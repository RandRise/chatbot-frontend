import { put, call, all, takeEvery } from "redux-saga/effects";
import { OrderManagement } from "../api/Order";

import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
} from '../redux/actions/Actions';
import { showToast } from "../components/ToastComponent";


function* createOrderSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(OrderManagement.createOrderApi, action.payload);
        yield put({ type: CREATE_ORDER_SUCCESS, payload: response })
        showToast('success', response.message || 'Success');

    } catch (error: any) {
        yield put({ type: CREATE_ORDER_FAILURE, payload: error })
        showToast('error', error.message || 'Failed');

    }
}


function* watchCreateOrderSaga(): Generator<any, void, any> {
    yield takeEvery(CREATE_ORDER_REQUEST, createOrderSaga);
}

export default function* OrderSaga() {
    yield all([
        watchCreateOrderSaga(),
    ])
}