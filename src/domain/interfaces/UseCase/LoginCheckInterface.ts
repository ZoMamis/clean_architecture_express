import { LoginRequest } from "../../Entity/Login";
export interface LoginCheck {
  execute(login: LoginRequest): Promise<boolean>;
}
