import { OrderInfoState } from '../../states/OrderState';
import {
    GET_ORDER_FAILURE,
    GET_ORDER_SUCCESS,
    GET_ORDER_REQUEST,
    GET_ALL_ORDERS_REQUEST,
    GET_ALL_ORDERS_SUCCESS,
    GET_ALL_ORDERS_FAILURE
} from '../actions/Actions';



const initialState: OrderInfoState = {
    orders: [],
    loading: false,
    response: null,
    isSuccess: null
};

const orderInfoReducer = (state = initialState, action: any): OrderInfoState => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return { ...state, loading: true };
        case GET_ORDER_SUCCESS:
            return { ...state, loading: false, orders: action.payload, response: action.payload };
        case GET_ORDER_FAILURE:
            return { ...state, loading: false, response: action.payload };
        case GET_ALL_ORDERS_REQUEST:
            return { ...state, loading: true };
        case GET_ALL_ORDERS_SUCCESS:
            return { ...state, loading: false, orders: action.payload, response: action.payload }
        case GET_ALL_ORDERS_FAILURE:
            return { ...state, loading: false, response: action.payload };
        default:
            return state;
    }
};

export default orderInfoReducer;
