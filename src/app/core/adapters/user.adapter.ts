import { Role, User } from '../models';
import { RoleAdapter } from './role.adapter';

export class UserAdapter {

  public static adaptResponseBody(data: any): User {
    return {
      id: data.id,
      password: data.password,
      username: data.username,
      roles: data.rolePojos?.map((rolePojo: any): any => RoleAdapter.adaptResponseBody(rolePojo))
    };
  }

  public static adaptRequestBody(user: User): any {
    return {
      id: user.id,
      password: user.password,
      username: user.username,
      rolePojos: user.roles?.map((role: Role): any => RoleAdapter.adaptRequestBody(role))
    };
  }

}