import { Injectable } from '@angular/core';
import { RoleService } from './role.service';
import { Observable } from 'rxjs';
import { Role } from '../../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const ROLE_URL: string = `${environment.serverUrl}/role`;

@Injectable({
  providedIn: 'root',
})
export class DefaultRoleService implements RoleService {

  constructor(protected httpClient: HttpClient) {
  }

  public findAll(): Observable<Role[]> {
    return this.httpClient
               .get<Role[]>(`${ROLE_URL}/all`);
  }

  public findById(id: number): Observable<Role> {
    return this.httpClient
               .get<Role>(`${ROLE_URL}/get/${id}`);
  }

  public saveNew(role: Role): Observable<number> {
    return this.httpClient
               .post<number>(`${ROLE_URL}/new`, role);
  }

  public saveUpdate(id: number, role: Role): Observable<number> {
    return this.httpClient
               .put<number>(`${ROLE_URL}/update/${id}`, role);
  }

  public deleteById(id: number): Observable<number> {
    return this.httpClient
               .delete<number>(`${ROLE_URL}/delete/${id}`);
  }

}
