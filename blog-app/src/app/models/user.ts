export type UserRole = 'admin' | 'user';

export interface AuthUser {
  readonly username: string;
  readonly role: UserRole;
}

export interface LoginCredentials {
  readonly username: string;
  readonly password: string;
}

export interface RegisterCredentials {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

export interface AuthApiResponse {
  readonly access_token: string;
  readonly username?: string;
  readonly role?: UserRole;
  readonly user?: AuthUser;
}
