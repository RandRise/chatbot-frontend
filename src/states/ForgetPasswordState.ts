import { GenericResponse } from "../utils/GenericResponse";

export interface ForgetPasswordState {
    loading: boolean;
    response: GenericResponse | null;
    isSuccess: boolean;
}