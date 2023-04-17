import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions-toolbar',
  templateUrl: './actions-toolbar.component.html',
  styleUrls: ['./actions-toolbar.component.css'],
})
export class ActionsToolbarComponent {
  @Input() columns!: string[];
  @Output() onColumnSelectionChange = new EventEmitter<string>();

  handleSelectionChange(event: any) {
    if (event.target.value) {
      this.onColumnSelectionChange.emit(event.target.value);
    }
  }
}
