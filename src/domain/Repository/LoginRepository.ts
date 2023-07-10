import { LoginDataSource } from "../../Data/Interfaces/DataSources/LoginDataSource";
import { LoginRequest, LoginResponse } from "../Entity/Login";
import { LoginRepositoryInterface } from "../interfaces/Repository/LoginRepositoryInterface";

export class LoginRepositoryImpl implements LoginRepositoryInterface {
  loginDataSource: LoginDataSource;
  constructor(loginDataSource: LoginDataSource) {
    this.loginDataSource = loginDataSource;
  }
  async loginCheck(login: LoginRequest): Promise<boolean> {
    const user = await this.loginDataSource.findOne({ email: login.email });

    if (user && user.password === login.password) {
      return true;
    } else {
      return false;
    }
  }
}
