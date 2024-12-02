import { Authentication } from '../models';

export class AuthenticationAdapter {

  public static adaptResponseBody(data: any): Authentication {
    return {
      token: data.token,
      username: data.username
    };
  }

  public static adaptRequestBody(authentication: Authentication): any {
    return {
      token: authentication.token,
      username: authentication.username
    };
  }

}
