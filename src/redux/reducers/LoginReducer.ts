import { USER_REQUEST_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../actions/Actions"
import { LoginState } from "../../states/LoginState";

const initialState: LoginState = {
    loading: false,
    response: null,
    isSuccess: null,

}

const loginReducer = (state = initialState, action: any): LoginState => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true, isSuccess: null};
        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, response: action.payload, isSuccess: true }
        case USER_REQUEST_FAILED:
            return { ...state, loading: false, response: action.payload, isSuccess: false }
        default:
            return state;
    }
}

export default loginReducer;