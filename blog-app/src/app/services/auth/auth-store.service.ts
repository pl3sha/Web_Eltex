import { Injectable, computed, signal } from '@angular/core';
import { AuthUser } from '../../models/user';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  private readonly userSignal = signal<AuthUser | null>(null);

  readonly user = this.userSignal.asReadonly();
  readonly isLoggedIn = computed(() => this.userSignal() !== null);

  setUser(user: AuthUser | null): void {
    this.userSignal.set(user);
  }

  getUser(): AuthUser | null {
    return this.userSignal();
  }

  hasRole(role: string): boolean {
    return this.userSignal()?.role === role;
  }
}
