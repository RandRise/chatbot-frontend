import { PackageState } from '../../states/PackageState';
import {
    GET_PACKAGES_REQUEST,
    GET_PACKAGES_SUCCESS,
    GET_PACKAGES_FAILURE,
    GET_PAID_PACKAGES_FAILURE,
    GET_PAID_PACKAGES_REQUEST,
    GET_PAID_PACKAGES_SUCCESS,
} from '../actions/Actions';



const initialState: PackageState = {
    packages: [],
    loading: false,
    response: null
};

const packagesReducer = (state = initialState, action: any): PackageState => {
    switch (action.type) {
        case GET_PACKAGES_REQUEST:
            return { ...state, loading: true };
        case GET_PACKAGES_SUCCESS:
            return { ...state, loading: false, packages: action.payload.data, response: action.payload };
        case GET_PACKAGES_FAILURE:
            return { ...state, loading: false, response: action.payload };
        case GET_PAID_PACKAGES_REQUEST:
            return { ...state, loading: true };
        case GET_PAID_PACKAGES_SUCCESS:
            return { ...state, loading: false, packages: action.payload.data, response: action.payload };
        case GET_PAID_PACKAGES_FAILURE:
            return { ...state, loading: false, response: action.payload };
        default:
            return state;
    }
};

export default packagesReducer;
