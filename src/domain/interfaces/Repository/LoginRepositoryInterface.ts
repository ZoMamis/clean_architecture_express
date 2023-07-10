import { LoginRequest, LoginResponse } from "../../Entity/Login";
export interface LoginRepositoryInterface {
    loginCheck(login: LoginRequest): Promise<boolean>;
}