import { Login } from "../../Entity/Login";
export interface LoginCheck {
    execute(login: Login): Promise<boolean>;
}