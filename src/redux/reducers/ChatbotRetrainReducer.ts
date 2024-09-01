import { BotManagementState } from "../../states/BotsState";
import {
    RETRAIN_BOT_FAILURE,
    RETRAIN_BOT_REQUEST,
    RETRAIN_BOT_SUCCESS,
} from '../actions/Actions';



const initialState: BotManagementState = {
    bots: [],
    loading: false,
    response: null,
    isSuccess: null
};

const retrainChatbotReducer = (state = initialState, action: any): BotManagementState => {
    switch (action.type) {
        case RETRAIN_BOT_REQUEST:
            return { ...state, loading: true };
        case RETRAIN_BOT_SUCCESS:
            return { ...state, loading: false, bots: action.payload, response: action.payload, isSuccess: true };
        case RETRAIN_BOT_FAILURE:
            return { ...state, loading: false, response: action.payload, isSuccess: false };
        default:
            return state;
    }
};

export default retrainChatbotReducer;
