import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defered-content-1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Contenido cargado de forma diferida
    </p>
    
  `,
  styles: ``
})
export class DeferedContent1Component {

}
