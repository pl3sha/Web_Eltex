import { Observable } from 'rxjs';
import { AuthUser, LoginCredentials, RegisterCredentials } from '../../models/user';

export interface IAuthService {
  restoreSession(): void;
  login(credentials: LoginCredentials): Observable<AuthUser>;
  register(credentials: RegisterCredentials): Observable<AuthUser>;
  logout(): void;
  getUser(): AuthUser | null;
  hasRole(role: string): boolean;
}
