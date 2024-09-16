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
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('API response:', response);

            const url = response?.data?.data;
            console.log('Redirect URL:', url);

            if (url) {
                window.location.href = url;
            } else {
                console.error('No URL found in the response for redirection.');
            }

            return response.data;
        } catch (error: any) {
            console.error('Error in createOrderApi:', error);
            throw error.response?.data ?? error.message;
        }
    }

    static fetchOrdersApi = async (): Promise<GenericResponse> => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.get(`${baseURL}/get-orders`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }

    static fetchAllOrdersApi = async (): Promise<GenericResponse> => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.get(`${baseURL}/get-all-orders`, {
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
