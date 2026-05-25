import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  AuthUser,
  LoginCredentials,
  RegisterCredentials,
  UserRole,
} from '../../models/user';
import { IAuthService } from './auth-service.interface';
import { AuthStoreService } from './auth-store.service';

const LS_ACCESS_TOKEN = 'access_token';
const LS_AUTH_USER = 'blog-auth-user';
const LS_AUTH_USERS = 'blog-auth-users';

interface StoredUser {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly role: UserRole;
}

const DEFAULT_ADMIN: StoredUser = {
  username: 'admin',
  password: 'admin',
  email: 'admin@local',
  role: 'admin',
};

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly store: AuthStoreService) {}

  restoreSession(): void {
    const user = this.readStoredUser();
    const token = this.readAccessToken();
    if (user && token) {
      this.store.setUser(user);
    }
  }

  login(credentials: LoginCredentials): Observable<AuthUser> {
    const users = this.readUsers();
    const match = users.find(
      (user) =>
        user.username === credentials.username.trim() &&
        user.password === credentials.password,
    );
    if (!match) {
      return throwError(() => new Error('Неверный логин или пароль'));
    }
    const authUser: AuthUser = { username: match.username, role: match.role };
    this.persistSession(authUser);
    return of(authUser);
  }

  register(credentials: RegisterCredentials): Observable<AuthUser> {
    const users = this.readUsers();
    const username = credentials.username.trim();
    const email = credentials.email.trim();
    if (users.some((user) => user.username === username)) {
      return throwError(() => new Error('Пользователь с таким логином уже существует'));
    }
    if (users.some((user) => user.email === email)) {
      return throwError(() => new Error('Пользователь с таким email уже существует'));
    }
    const newUser: StoredUser = {
      username,
      email,
      password: credentials.password,
      role: 'user',
    };
    this.writeUsers([...users, newUser]);
    return this.login({ username, password: credentials.password });
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

  private persistSession(user: AuthUser): void {
    this.writeAccessToken(crypto.randomUUID());
    this.writeStoredUser(user);
    this.store.setUser(user);
  }

  private clearSession(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.removeItem(LS_ACCESS_TOKEN);
    localStorage.removeItem(LS_AUTH_USER);
  }

  private readUsers(): StoredUser[] {
    if (typeof localStorage === 'undefined') {
      return [DEFAULT_ADMIN];
    }
    try {
      const raw = localStorage.getItem(LS_AUTH_USERS);
      if (!raw) {
        const seeded = [DEFAULT_ADMIN];
        this.writeUsers(seeded);
        return seeded;
      }
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? (parsed as StoredUser[]) : [DEFAULT_ADMIN];
    } catch {
      return [DEFAULT_ADMIN];
    }
  }

  private writeUsers(users: StoredUser[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(LS_AUTH_USERS, JSON.stringify(users));
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
