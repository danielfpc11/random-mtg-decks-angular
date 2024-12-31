import { Observable } from "rxjs";
import { User } from "../../models";

export abstract class UserService {

  public abstract findAll(): Observable<User[]>;

  public abstract findById(id: number): Observable<User>;

  public abstract saveNew(user: User): Observable<number>;

  public abstract saveUpdate(id: number, user: User): Observable<number>;

  public abstract deleteById(id: number): Observable<number>;

}
