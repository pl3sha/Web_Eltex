import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  AuthApiResponse,
  AuthUser,
  LoginCredentials,
  RegisterCredentials,
} from '../../models/user';
import { IAuthService } from './auth-service.interface';
import { AuthStoreService } from './auth-store.service';

const LS_ACCESS_TOKEN = 'access_token';
const LS_AUTH_USER = 'blog-auth-user';

@Injectable()
export class AuthApiService implements IAuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly store: AuthStoreService,
  ) {}

  restoreSession(): void {
    const user = this.readStoredUser();
    const token = this.readAccessToken();
    if (user && token) {
      this.store.setUser(user);
    }
  }

  login(credentials: LoginCredentials): Observable<AuthUser> {
    return this.http
      .post<AuthApiResponse>(`${environment.apiUrl}/user/login`, {
        username: credentials.username.trim(),
        password: credentials.password,
      })
      .pipe(map((response) => this.applyAuthResponse(response)));
  }

  register(credentials: RegisterCredentials): Observable<AuthUser> {
    return this.http
      .post(`${environment.apiUrl}/user/register`, {
        username: credentials.username.trim(),
        email: credentials.email.trim(),
        password: credentials.password,
      })
      .pipe(
        switchMap(() =>
          this.login({ username: credentials.username, password: credentials.password }),
        ),
      );
  }

  logout(): void {
    this.clearSession();
    this.store.setUser(null);
  }

  getUser(): AuthUser | null {
    return this.store.getUser();
  }

  hasRole(role: string): boolean {
    return this.store.hasRole(role);
  }

  private applyAuthResponse(response: AuthApiResponse): AuthUser {
    const user: AuthUser = response.user ?? {
      username: response.username ?? '',
      role: response.role ?? 'user',
    };
    if (!user.username) {
      throw new Error('Некорректный ответ сервера');
    }
    this.writeAccessToken(response.access_token);
    this.writeStoredUser(user);
    this.store.setUser(user);
    return user;
  }

  private clearSession(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.removeItem(LS_ACCESS_TOKEN);
    localStorage.removeItem(LS_AUTH_USER);
  }

  private readAccessToken(): string | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }
    return localStorage.getItem(LS_ACCESS_TOKEN);
  }

  private writeAccessToken(token: string): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(LS_ACCESS_TOKEN, token);
  }

  private readStoredUser(): AuthUser | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }
    try {
      const raw = localStorage.getItem(LS_AUTH_USER);
      if (!raw) {
        return null;
      }
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  }

  private writeStoredUser(user: AuthUser): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(LS_AUTH_USER, JSON.stringify(user));
  }
}
