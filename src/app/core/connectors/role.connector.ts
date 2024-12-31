import { Injectable } from "@angular/core";
import { ErrorHandlerService, RoleService } from "../services";
import { catchError, map, Observable } from "rxjs";
import { Role } from "../models";
import { RoleAdapter } from "../adapters";

@Injectable({
  providedIn: 'root'
})
export class RoleConnector {

  constructor(protected roleService: RoleService,
              protected errorHandlerService: ErrorHandlerService) {
  }

  public findAllRoles(): Observable<Role[]> {
    return this.roleService
               .findAll()
               .pipe(
                 map((rolePojos: any): Role[] => rolePojos.map((rolePojo: any): Role => RoleAdapter.adaptResponseBody(rolePojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public findRoleById(id: number): Observable<Role> {
    return this.roleService
               .findById(id)
               .pipe(
                 map((rolePojo: any): Role => RoleAdapter.adaptResponseBody(rolePojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public saveNewRole(role: Role): Observable<number> {
    return this.roleService
               .saveNew(RoleAdapter.adaptRequestBody(role))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public saveUpdateRole(id: number, role: Role): Observable<number> {
    return this.roleService
               .saveUpdate(id, RoleAdapter.adaptRequestBody(role))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public deleteRoleById(id: number): Observable<number> {
    return this.roleService
               .deleteById(id)
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

}