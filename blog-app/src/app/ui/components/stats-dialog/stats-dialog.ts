import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  effect,
  input,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-stats-dialog',
  imports: [],
  templateUrl: './stats-dialog.html',
  styleUrl: './stats-dialog.scss',
})
export class StatsDialog {
  readonly count = input(0);
  readonly open = input(false);

  @Output() close = new EventEmitter<void>();

  private readonly dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialogEl');

  constructor() {
    effect(() => {
      const isOpen = this.open();
      const dlg = this.dialogRef()?.nativeElement;
      if (!dlg) return;
      if (isOpen && !dlg.open) dlg.showModal();
      if (!isOpen && dlg.open) dlg.close();
    });
  }

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialogRef()?.nativeElement) {
      this.close.emit();
    }
  }
}
