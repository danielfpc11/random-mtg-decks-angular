import { Injectable } from "@angular/core";
import { ErrorHandlerService, UserService } from "../services";
import { catchError, map, Observable } from "rxjs";
import { User } from "../models";
import { UserAdapter } from "../adapters";

@Injectable({
  providedIn: 'root'
})
export class UserConnector {

  constructor(protected userService: UserService,
              protected errorHandlerService: ErrorHandlerService) {
  }

  public findAllUsers(): Observable<User[]> {
    return this.userService
               .findAll()
               .pipe(
                 map((userPojos: any): User[] => userPojos.map((userPojo: any): User => UserAdapter.adaptResponseBody(userPojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public findUserById(id: number): Observable<User> {
    return this.userService
               .findById(id)
               .pipe(
                 map((userPojo: any): User => UserAdapter.adaptResponseBody(userPojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public saveNewUser(user: User): Observable<number> {
    return this.userService
               .saveNew(UserAdapter.adaptRequestBody(user))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public saveUpdateUser(id: number, user: User): Observable<number> {
    return this.userService
               .saveUpdate(id, UserAdapter.adaptRequestBody(user))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public deleteUserById(id: number): Observable<number> {
    return this.userService
               .deleteById(id)
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

}