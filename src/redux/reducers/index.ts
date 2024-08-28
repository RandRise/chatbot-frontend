import { combineReducers } from 'redux';
import registrationReducer from './RegistrationReducer';
import loginReducer from './LoginReducer';
import forgetPasswordReducer from './ForgetPasswordReducer';
import resetPasswordReducer from './ResetPasswordReducer';
import packagesReducer from './FetchPackagesReducer';
import botsReducer from './UserBotManagmentReducer';

const rootReducer = combineReducers({
  userRegistration: registrationReducer,
  userLogin: loginReducer,
  userForgetPassword: forgetPasswordReducer,
  userResetPassword: resetPasswordReducer,
  pkgReducer: packagesReducer,
  botsReducer: botsReducer,

});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
