export interface GenericResponse {
    code: number;
    message: string;
    data: string| null;
}

export interface LoginResponseData {
    token: string;
    userId: string;
    role: string;
}

export interface LoginResponse extends GenericResponse {
    data: LoginResponseData | any;
}