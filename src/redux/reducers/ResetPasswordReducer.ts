import { USER_REQUEST_FAILED, USER_RESET_PASSWORD_REQUEST, USER_RESET_PASSWORD_SUCCESS } from "../actions/Actions"
import { ResetPasswordState } from "../../states/ResetPasswordState";

const initialState: ResetPasswordState = {
    loading: false,
    response: null,
    isSuccess: false,

}

const resetPasswordReducer = (state = initialState, action: any): ResetPasswordState => {
    switch (action.type) {
        case USER_RESET_PASSWORD_REQUEST:
            return { ...state, loading: true, isSuccess: false };
        case USER_RESET_PASSWORD_SUCCESS:
            return { ...state, loading: false, response: action.payload, isSuccess: true }
        case USER_REQUEST_FAILED:
            return { ...state, loading: false, isSuccess: false, response: action.payload }
        default:
            return state;
    }
}

export default resetPasswordReducer;