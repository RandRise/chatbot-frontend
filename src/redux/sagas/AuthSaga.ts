import { takeLatest, put, call, all, takeEvery } from "redux-saga/effects";
import { Authentication } from "../../api/Auth";
import { showToast } from "../../components/common/ToastComponent";
import {
    USER_REQUEST_FAILED,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_FORGET_PASSWORD_SUCCESS,
    USER_FORGET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_REQUEST,
} from "../actions/Actions";

// Handle user registration
function* userRegistrationSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(Authentication.registerUserApi, action.payload);
        if (response.code === 200) {
            yield put({ type: USER_REGISTRATION_SUCCESS, payload: response });
            showToast('success', response.message || 'Registration successful');
        } else {
            yield put({ type: USER_REQUEST_FAILED, payload: response });
            showToast('error', response.message || 'Registration failed');
        }
    } catch (error: any) {
        yield put({ type: USER_REQUEST_FAILED, payload: error });
        showToast('error', error.message || 'Registration failed');

    }
}

// Handle user login
function* userLoginSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(Authentication.loginUserApi, action.payload);
        if (response.code === 200) {
            yield put({ type: USER_LOGIN_SUCCESS, payload: response });
            showToast('success', response.message || 'Login successful');

        } else {
            yield put({ type: USER_REQUEST_FAILED, payload: response });
            showToast('error', response.message || 'Login failed');

        }
    } catch (error: any) {
        yield put({ type: USER_REQUEST_FAILED, payload: error });
        showToast('error', error.message || 'Login failed');
    }
}

// Handle forget password request
function* userForgetPasswordSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(Authentication.forgetUserPasswordApi, action.payload);
        if (response.code === 200) {
            yield put({ type: USER_FORGET_PASSWORD_SUCCESS, payload: response });
            showToast('success', response.message || 'Password reset success');

        } else {
            yield put({ type: USER_REQUEST_FAILED, payload: response });
            showToast('error', response.message || 'Password reset failed');

        }
    } catch (error: any) {
        yield put({ type: USER_REQUEST_FAILED, payload: error });
        showToast('error', error.message || 'Password reset failed');

    }
}

// Handle reset password request
function* userResetPasswordSaga(action: any): Generator<any, void, any> {
    try {
        const response = yield call(Authentication.resetUserPasswordApi, action.payload);
        if (response.code === 200) {
            yield put({ type: USER_RESET_PASSWORD_SUCCESS, payload: response });
            showToast('success', response.message || 'Password reset success');

        } else {
            yield put({ type: USER_REQUEST_FAILED, payload: response });
            showToast('error', response.message || 'Password reset failed');


        }
    } catch (error: any) {
        yield put({ type: USER_REQUEST_FAILED, payload: error });
        showToast('error', error.message || 'Password reset failed');

    }
}



function* watchUserRegistrationSaga(): Generator<any, void, any> {
    yield takeEvery(USER_REGISTRATION_REQUEST, userRegistrationSaga);
}

function* watchUserLoginSaga(): Generator<any, void, any> {
    yield takeLatest(USER_LOGIN_REQUEST, userLoginSaga);
}

function* watchUserForgetPasswordSaga(): Generator<any, void, any> {
    yield takeLatest(USER_FORGET_PASSWORD_REQUEST, userForgetPasswordSaga);
}

function* watchUserResetPasswordSaga(): Generator<any, void, any> {
    yield takeLatest(USER_RESET_PASSWORD_REQUEST, userResetPasswordSaga);
}

export default function* authSaga() {
    yield all([
        watchUserRegistrationSaga(),
        watchUserLoginSaga(),
        watchUserForgetPasswordSaga(),
        watchUserResetPasswordSaga(),
    ]);
}
