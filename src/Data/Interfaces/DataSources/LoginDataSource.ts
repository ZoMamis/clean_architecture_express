import { LoginRequest, LoginResponse } from "../../../domain/Entity/Login";

export interface LoginDataSource {
    [x: string]: any;
    loginCheck() : Promise<LoginResponse[]>;
}