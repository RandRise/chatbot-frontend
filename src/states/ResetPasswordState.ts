import { GenericResponse } from "../utils/GenericResponse";

export interface ResetPasswordState {
    loading: boolean;
    response: GenericResponse | null;
    isSuccess: boolean;
}