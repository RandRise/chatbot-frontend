import axios from "axios";
import { GenericResponse } from "../utils/GenericResponse";
const baseURL = 'http://localhost:3000';

export class fetchBotsInfo {
    static fetchBotsInfoApi = async (): Promise<GenericResponse> => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token available');
            }

            const response = await axios.get(`${baseURL}/get-bots`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }

    static trainBotApi = async()
}
