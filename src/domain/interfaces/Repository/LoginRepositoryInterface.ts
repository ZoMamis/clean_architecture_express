import { Login } from "../../Entity/Login";
export interface LoginRepositoryInterface {
    loginCheck(login: Login): Promise<boolean>;
}