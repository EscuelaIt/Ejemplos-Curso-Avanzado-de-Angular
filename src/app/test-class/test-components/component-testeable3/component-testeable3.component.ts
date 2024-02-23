import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-testeable3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ title }}</h1>
    <p>
      banner works!
    </p>
  `,
  styles: ``
})
export class ComponentTesteable3Component {
  title: string = 'Titulo por defecto';

}
