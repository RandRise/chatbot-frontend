import { BotState } from "../../states/BotsState";
import {
    GET_BOTS_REQUEST,
    GET_BOTS_SUCCESS,
    GET_BOTS_FAILURE,
} from '../actions/Actions';



const initialState: BotState = {
    bots: [],
    loading: false,
    response: null
};

const botsReducer = (state = initialState, action: any): BotState => {
    switch (action.type) {
        case GET_BOTS_REQUEST:
            return { ...state, loading: true };
        case GET_BOTS_SUCCESS:
            return { ...state, loading: false, bots: action.payload.data, response: action.payload };
        case GET_BOTS_FAILURE:
            return { ...state, loading: false, response: action.payload };
        default:
            return state;
    }
};

export default botsReducer;
