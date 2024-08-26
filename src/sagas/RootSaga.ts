import { all } from "redux-saga/effects";
import authSaga from "./AuthSaga";
import pkgSaga from "./PkgManagmentSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        pkgSaga(),
    ])
}