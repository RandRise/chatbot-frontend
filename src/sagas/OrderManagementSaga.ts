import { put, call, all, takeEvery } from "redux-saga/effects";
import { OrderManagement } from "../api/Order";

import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    GET_ORDER_FAILURE,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_BOTS_REQUEST,
    GET_ALL_ORDERS_FAILURE,
    GET_ALL_ORDERS_REQUEST,
    GET_ALL_ORDERS_SUCCESS,
} from '../redux/actions/Actions';
import { showToast } from "../components/ToastComponent";

function* createOrderSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(OrderManagement.createOrderApi, action.payload);
        yield put({ type: CREATE_ORDER_SUCCESS, payload: response })
        yield put({ type: GET_BOTS_REQUEST, payload: response })
        showToast('success', response.message || 'Success');

    } catch (error: any) {
        yield put({ type: CREATE_ORDER_FAILURE, payload: error })
        showToast('error', error.message || 'Failed');

    }
}

function* fetchOrdersSaga(): Generator<any, void, any> {
    try {
        const response = yield call(OrderManagement.fetchOrdersApi);
        yield put({ type: GET_ORDER_SUCCESS, payload: response.data })
    } catch (error: any) {
        yield put({ type: GET_ORDER_FAILURE, payload: error })
    }
}

function* watchFetchOrdersSaga(): Generator<any, void, any> {
    yield takeEvery(GET_ORDER_REQUEST, fetchOrdersSaga);
}

function* fetchAllOrdersSaga(): Generator<any, void, any> {
    try {
        const response = yield call(OrderManagement.fetchAllOrdersApi);
        yield put({ type: GET_ALL_ORDERS_SUCCESS, payload: response.data })
    } catch (error: any) {
        yield put({ type: GET_ALL_ORDERS_FAILURE, payload: error })
    }
}

function* watchFetchAllOrdersSaga(): Generator<any, void, any> {
    yield takeEvery(GET_ALL_ORDERS_REQUEST, fetchAllOrdersSaga);
}

function* watchCreateOrderSaga(): Generator<any, void, any> {
    yield takeEvery(CREATE_ORDER_REQUEST, createOrderSaga);
}

export default function* OrderSaga() {
    yield all([
        watchCreateOrderSaga(),
        watchFetchOrdersSaga(),
        watchFetchAllOrdersSaga(),
    ])
}