import { all } from "redux-saga/effects";
import authSaga from "./AuthSaga";
import pkgSaga from "./PkgManagmentSaga";
import botSaga from "./UserBotManagementSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        pkgSaga(),
        botSaga(),
    ])
}