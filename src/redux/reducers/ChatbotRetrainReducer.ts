import { BotState } from "../../states/BotsState";
import {
    RETRAIN_BOT_FAILURE,
    RETRAIN_BOT_REQUEST,
    RETRAIN_BOT_SUCCESS,
} from '../actions/Actions';



const initialState: BotState = {
    bots: [],
    loading: false,
    response: null
};

const retrainChatbotReducer = (state = initialState, action: any): BotState => {
    switch (action.type) {
        case RETRAIN_BOT_REQUEST:
            return { ...state, loading: true };
        case RETRAIN_BOT_SUCCESS:
            return { ...state, loading: false, bots: action.payload.data, response: action.payload };
        case RETRAIN_BOT_FAILURE:
            return { ...state, loading: false, response: action.payload };
        default:
            return state;
    }
};

export default retrainChatbotReducer;
