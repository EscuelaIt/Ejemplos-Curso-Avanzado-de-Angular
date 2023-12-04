import { ChangeDetectionStrategy, Component, EventEmitter, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-det-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="margin-b-10 margin-t-50">
      <label>Buscar persona v2</label>
      <input placeholder="indique el nombre" [(ngModel)]="filterPersonName" (keydown)="handleKey($event)" type="text">
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetSearchInputComponent {

  @Output() add = new EventEmitter<string>();

  filterPersonName = '';

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.filterPersonName);
      // this.filterPersonName = '';
    }
  }
}
