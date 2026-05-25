import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { AUTH_SERVICE } from '../../../services/auth/auth-service.token';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
    MatButton,
  ],
  templateUrl: './auth-dialog.html',
  styleUrl: './auth-dialog.scss',
})
export class AuthDialog {
  private readonly auth = inject(AUTH_SERVICE);
  private readonly dialogRef = inject(MatDialogRef<AuthDialog>);

  readonly mode = signal<AuthMode>('login');
  readonly errorMessage = signal('');
  readonly isSubmitting = signal(false);

  readonly loginForm = new FormBuilder().group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  readonly registerForm = new FormBuilder().group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  showLogin(): void {
    this.mode.set('login');
    this.errorMessage.set('');
  }

  showRegister(): void {
    this.mode.set('register');
    this.errorMessage.set('');
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.errorMessage.set('');
    const { username, password } = this.loginForm.getRawValue();
    this.auth.login({ username: username!, password: password! }).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.dialogRef.close(true);
      },
      error: (err: unknown) => {
        this.isSubmitting.set(false);
        this.errorMessage.set(this.resolveErrorMessage(err, 'Не удалось войти'));
      },
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.errorMessage.set('');
    const { username, email, password } = this.registerForm.getRawValue();
    this.auth
      .register({ username: username!, email: email!, password: password! })
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.dialogRef.close(true);
        },
        error: (err: unknown) => {
          this.isSubmitting.set(false);
          this.errorMessage.set(this.resolveErrorMessage(err, 'Не удалось зарегистрироваться'));
        },
      });
  }

  private resolveErrorMessage(err: unknown, fallback: string): string {
    if (err instanceof HttpErrorResponse) {
      const body = err.error;
      if (typeof body === 'string' && body) {
        return body;
      }
      if (body && typeof body.message === 'string') {
        return body.message;
      }
      if (body && Array.isArray(body.message)) {
        return body.message.join(', ');
      }
    }
    if (err instanceof Error && err.message) {
      return err.message;
    }
    return fallback;
  }
}
