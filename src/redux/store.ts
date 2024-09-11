import { legacy_createStore as createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import rootSaga from "./sagas/RootSaga";
import registrationReducer from "./reducers/RegistrationReducer";
import loginReducer from "./reducers/LoginReducer";
import forgetPasswordReducer from "./reducers/ForgetPasswordReducer";
import resetPasswordReducer from "./reducers/ResetPasswordReducer";
import packagesReducer from "./reducers/FetchPackagesReducer";
import botsReducer from "./reducers/UserBotManagmentReducer";
import createOrderReducer from "./reducers/OrderReducer";
import rechargeChatbotReducer from "./reducers/ChatbotRechargeReducer";
import retrainChatbotReducer from "./reducers/ChatbotRetrainReducer";
import orderInfoReducer from "./reducers/OrderInfoReducer";

const rootReducer = combineReducers({
    userRegistration: registrationReducer,
    userLogin: loginReducer,
    userForgetPassword: forgetPasswordReducer,
    userResetPassword: resetPasswordReducer,
    // pkgReducer: packagesReducer,
    botsReducer: botsReducer,
    orderReducer: createOrderReducer,
    rechargeChatbot: rechargeChatbotReducer,
    retrainChatbot: retrainChatbotReducer,
    // orderInfoReducer: orderInfoReducer,
    orderInfoReducer,
    pkgReducer: packagesReducer,

})

const sagaMiddleWare = createSagaMiddleware();
let middleware = [sagaMiddleWare];
const store = createStore (rootReducer, applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga);

export default store;