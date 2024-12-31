import { Role } from "../models";

export class RoleAdapter {

  public static adaptResponseBody(data: any): Role {
    return {
      id: data.id,
      name: data.name
    };
  }

  public static adaptRequestBody(role: Role): any {
    return {
        id: role.id,
        name: role.name
      };
  }

}
