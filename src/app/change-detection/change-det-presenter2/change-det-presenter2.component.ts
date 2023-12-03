import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-det-presenter2',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="bg-color-green">
    <p>
      Contenido del componente
      ChangeDetPresenter2
    </p>
  </div>
  `,
  styles: ``
})
export class ChangeDetPresenter2Component {

}
