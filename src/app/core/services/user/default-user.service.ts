import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models';
import { environment } from 'src/environments/environment';

export const USER_URL: string = `${environment.serverUrl}/user`;

@Injectable({
  providedIn: 'root'
})
export class DefaultUserService implements UserService {

  constructor(protected httpClient: HttpClient) {
    }
  
    public findAll(): Observable<User[]> {
      return this.httpClient
                 .get<User[]>(`${USER_URL}/all`);
    }
  
    public findById(id: number): Observable<User> {
      return this.httpClient
                 .get<User>(`${USER_URL}/get/${id}`);
    }
  
    public saveNew(user: User): Observable<number> {
      return this.httpClient
                 .post<number>(`${USER_URL}/new`, user);
    }
  
    public saveUpdate(id: number, user: User): Observable<number> {
      return this.httpClient
                 .put<number>(`${USER_URL}/update/${id}`, user);
    }
  
    public deleteById(id: number): Observable<number> {
      return this.httpClient
                 .delete<number>(`${USER_URL}/delete/${id}`);
    }
  
}
