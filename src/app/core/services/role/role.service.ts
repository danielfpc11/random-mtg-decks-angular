import { Observable } from "rxjs";
import { Role } from "../../models";

export abstract class RoleService {

  public abstract findAll(): Observable<Role[]>;

  public abstract findById(id: number): Observable<Role>;

  public abstract saveNew(role: Role): Observable<number>;

  public abstract saveUpdate(id: number, role: Role): Observable<number>;

  public abstract deleteById(id: number): Observable<number>;

}