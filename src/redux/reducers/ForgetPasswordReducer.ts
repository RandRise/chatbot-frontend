import { USER_REQUEST_FAILED, USER_FORGET_PASSWORD_REQUEST, USER_FORGET_PASSWORD_SUCCESS } from "../actions/Actions"
import { ForgetPasswordState } from "../../states/ForgetPasswordState";

const initialState: ForgetPasswordState = {
    loading: false,
    response: null,
    isSuccess: false,

}

const forgetPasswordReducer = (state = initialState, action: any): ForgetPasswordState => {
    switch (action.type) {
        case USER_FORGET_PASSWORD_REQUEST:
            return { ...state, loading: true, isSuccess: false };
        case USER_FORGET_PASSWORD_SUCCESS:
            return { ...state, loading: false, response: action.payload, isSuccess: true }
        case USER_REQUEST_FAILED:
            return { ...state, loading: false, isSuccess: false, response: action.payload }
        default:
            return state;
    }
}

export default forgetPasswordReducer;