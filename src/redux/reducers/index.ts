import { combineReducers } from 'redux';
import registrationReducer from './RegistrationReducer';
import loginReducer from './LoginReducer';
import forgetPasswordReducer from './ForgetPasswordReducer';
import resetPasswordReducer from './ResetPasswordReducer';
import packagesReducer from './FetchPackagesReducer';
import botsReducer from './UserBotManagmentReducer';
import createOrderReducer from './OrderReducer';
import rechargeChatbotReducer from './ChatbotRechargeReducer';
import retrainChatbotReducer from './ChatbotRetrainReducer';
import orderInfoReducer from './OrderInfoReducer';

const rootReducer = combineReducers({
  userRegistration: registrationReducer,
  userLogin: loginReducer,
  userForgetPassword: forgetPasswordReducer,
  userResetPassword: resetPasswordReducer,
  pkgReducer: packagesReducer,
  botsReducer: botsReducer,
  orderReducer: createOrderReducer,
  rechargeChatbot: rechargeChatbotReducer,
  retrainChatbot: retrainChatbotReducer,
  orderInfoReducer: orderInfoReducer,



});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
