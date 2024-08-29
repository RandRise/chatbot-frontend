import axios from "axios";
import { GenericResponse } from "../utils/GenericResponse";
import { BotsModel } from "../models/BotsModel";
const baseURL = 'http://localhost:3000';

export class chatbotManagement {
    static fetchBotsInfoApi = async (): Promise<GenericResponse> => {
        try {
            const token = localStorage.getItem('token');
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

    static rechargeBotQuotaApi = async (formData: BotsModel): Promise<GenericResponse> => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${baseURL}/recharge-bot`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }

    static retrainBotApi = async (botId: number): Promise<GenericResponse> => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${baseURL}/retrain-bot`, botId, {
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
