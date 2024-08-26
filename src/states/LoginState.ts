import { GenericResponse } from "../utils/GenericResponse";

export interface LoginState {
    loading: boolean;
    response: GenericResponse | null;
    isSuccess: boolean | null;

}