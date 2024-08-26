import axios from "axios";
import { GenericResponse } from "../utils/GenericResponse";
const baseURL = 'http://localhost:3000';

export class fetchPackageInfo {
    static fetchPackageApi = async (): Promise<GenericResponse> => {
        try {
            const response = await axios.get(`${baseURL}/get-packages`);
            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }
}