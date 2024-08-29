import { GenericResponse } from "../utils/GenericResponse";

export interface OrderState {
    loading: boolean;
    response: GenericResponse | null;
    isSuccess: boolean | null;

}