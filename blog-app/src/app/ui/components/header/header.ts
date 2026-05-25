import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { AUTH_SERVICE } from '../../../services/auth/auth-service.token';
import { AuthStoreService } from '../../../services/auth/auth-store.service';
import { AuthDialog } from '../auth-dialog/auth-dialog';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatButton, MatIcon, MatIconButton, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly auth = inject(AUTH_SERVICE);
  private readonly authStore = inject(AuthStoreService);
  private readonly dialog = inject(MatDialog);

  readonly user = this.authStore.user;
  readonly isLoggedIn = this.authStore.isLoggedIn;

  scrollToContacts(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  openLoginDialog(): void {
    this.dialog.open(AuthDialog, {
      width: '400px',
      autoFocus: 'first-tabbing-group',
    });
  }

  onLogout(): void {
    this.auth.logout();
  }
}
