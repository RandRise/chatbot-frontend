import { RegistrationState } from "../../states/RegistrationState";
import {
    USER_REGISTRATION_SUCCESS,
    USER_REQUEST_FAILED,
    USER_REGISTRATION_REQUEST,
} from "../actions/Actions";

const initialState: RegistrationState = {
    loading: false,
    response: null,
    isSuccess: null,
};

const registrationReducer = (state = initialState, action: any): RegistrationState => {
    
    switch (action.type) {
        case USER_REGISTRATION_REQUEST:
            return { ...state, loading: true };

        case USER_REGISTRATION_SUCCESS:
            return { ...state, loading: false, response: action.payload, isSuccess: true };

        case USER_REQUEST_FAILED:
            return { ...state, loading: false, response: action.payload, isSuccess: false };
        default:
            return state;
    }
};

export default registrationReducer;
