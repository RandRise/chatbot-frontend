import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS
} from "../actions/Actions"
import { OrderState } from "../../states/OrderState";

const initialState: OrderState = {
    loading: false,
    response: null,
    isSuccess: null,

}

const createOrderReducer = (state = initialState, action: any): OrderState => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return { ...state, loading: true, isSuccess: null };
        case CREATE_ORDER_SUCCESS:
            return { ...state, loading: false, response: action.payload, isSuccess: true }
        case CREATE_ORDER_FAILURE:
            return { ...state, loading: false, response: action.payload, isSuccess: false }
        default:
            return state;
    }
}

export default createOrderReducer;