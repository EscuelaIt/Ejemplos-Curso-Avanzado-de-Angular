import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBook2 } from './my-book2';

@Component({
  selector: 'app-component-testeable1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      component-testeable1 works!
    </p>
  `,
  styles: ``
})
export class ComponentTesteable1Component {
  @Input() book!: MyBook2;
  @Output() selected = new EventEmitter<MyBook2>();

  click() {
    this.selected.emit(this.book);
  }
}

