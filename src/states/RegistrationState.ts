import { GenericResponse } from "../utils/GenericResponse";

export interface RegistrationState {
    loading: boolean;
    response: GenericResponse | null;
    isSuccess: boolean | null;
}   