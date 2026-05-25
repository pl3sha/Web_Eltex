import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
  input,
} from '@angular/core';
import { AuthStoreService } from '../services/auth/auth-store.service';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective {
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly authStore = inject(AuthStoreService);

  readonly appHasRole = input.required<string>();

  constructor() {
    effect(() => {
      const requiredRole = this.appHasRole();
      this.authStore.user();
      this.viewContainer.clear();
      if (this.authStore.hasRole(requiredRole)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }
}
