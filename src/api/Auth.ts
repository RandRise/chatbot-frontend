import axios from "axios";
import { userRegistrationModel } from "../models/UserRegistrationModel";
import { GenericResponse } from "../utils/GenericResponse";
import { userLoginModel } from "../models/UserLoginModel";
import { userForgetPasswordModel } from "../models/UserForgetPasswordModel";
import { userResetPasswordModel } from "../models/UserResetPasswordModel";

const baseURL = 'http://localhost:3000';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
       
        if (error.response && error.response.status === 401) {
        }
        return Promise.reject(error);
    }
);

export class Authentication {
    static registerUserApi = async (formData: userRegistrationModel): Promise<GenericResponse> => {
        try {
            const response = await axios.post(`${baseURL}/register`, formData);
            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }

    static loginUserApi = async (formData: userLoginModel): Promise<GenericResponse> => {
        try {
            const response = await axios.post(`${baseURL}/login`, formData);
            const { token } = response.data.data;
            localStorage.setItem('token', token);

            return response.data;
        } catch (error: any) {

            throw error.response?.data ?? error.message;
        }
    }
    static logout = () => {
        localStorage.removeItem('token');
        // window.location.href = '/sign-in';
    }

    static forgetUserPasswordApi = async (formData: userForgetPasswordModel): Promise<GenericResponse> => {
        try {
            const response = await axios.post(`${baseURL}/forgot-password`, formData);
            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }

    static resetUserPasswordApi = async (formData: userResetPasswordModel): Promise<GenericResponse> => {
        try {
            const response = await axios.post(`${baseURL}/reset-password`, formData);
            return response.data;
        } catch (error: any) {
            throw error.response?.data ?? error.message;
        }
    }
}


