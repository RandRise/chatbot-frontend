import axios from "axios";
import { GenericResponse } from "../utils/GenericResponse";
import { CreateOrderModel } from "../models/OrderModel";
const baseURL = 'http://localhost:3000';

export class OrderManagement {
    static createOrderApi = async (formData: CreateOrderModel): Promise<GenericResponse> => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.post(`${baseURL}/create-order`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }
}
