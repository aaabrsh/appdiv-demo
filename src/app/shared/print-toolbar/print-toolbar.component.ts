import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-print-toolbar',
  templateUrl: './print-toolbar.component.html',
  styleUrls: ['./print-toolbar.component.css'],
})
export class PrintToolbarComponent {
  @Input() printOptions!: string[];
  @Output() onPrint = new EventEmitter<string>();

  selected: string | null = null;

  handleSelectionChange(event: any) {
    this.selected = event.target.value;
  }

  handlePrintClick() {
    if (this.selected) {
      this.onPrint.emit(this.selected);
    }
  }
}
