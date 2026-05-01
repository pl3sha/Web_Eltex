import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  imports: [],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
})
export class AdminPanel {
  @Output() create = new EventEmitter<void>();
  @Output() stats = new EventEmitter<void>();

  onCreate(): void {
    this.create.emit();
  }

  onStats(): void {
    this.stats.emit();
  }
}
