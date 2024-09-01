import { OrderInfoModel } from "../models/OrderModel";
import { GenericResponse } from "../utils/GenericResponse";

export interface OrderState {
    loading: boolean;
    response: GenericResponse | null;
    isSuccess: boolean | null;

}

export interface OrderInfoState {
    orders: OrderInfoModel[]
    response: GenericResponse | null;
    loading: boolean
    isSuccess: boolean | null;
}