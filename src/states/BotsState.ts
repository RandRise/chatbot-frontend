import { BotsModel } from "../models/BotsModel";
import { GenericResponse } from "../utils/GenericResponse";

export interface BotState {
    bots: BotsModel[];
    loading: boolean;
    response: GenericResponse | null;
}

export interface BotManagementState {
    bots: BotsModel[]
    loading: boolean
    response: GenericResponse | null
    isSuccess: boolean | null
}