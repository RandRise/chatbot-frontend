import { BotState } from "../../states/BotsState";
import {
    RECHARGE_BOT_FAILURE,
    RECHARGE_BOT_REQUEST,
    RECHARGE_BOT_SUCCESS,
} from '../actions/Actions';



const initialState: BotState = {
    bots: [],
    loading: false,
    response: null
};

const rechargeChatbotReducer = (state = initialState, action: any): BotState => {
    switch (action.type) {
        case RECHARGE_BOT_REQUEST:
            return { ...state, loading: true };
        case RECHARGE_BOT_SUCCESS:
            return { ...state, loading: false, bots: action.payload.data, response: action.payload };
        case RECHARGE_BOT_FAILURE:
            return { ...state, loading: false, response: action.payload };
        default:
            return state;
    }
};

export default rechargeChatbotReducer;
