import { User } from '../models';

export class UserAdapter {

  public static adaptResponseBody(data: any): User {
    return {
      password: data.password,
      username: data.username
    };
  }

  public static adaptRequestBody(user: User): any {
    return {
      password: user.password,
      username: user.username
    };
  }

}
