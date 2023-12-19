import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rout-child2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      rout-child2 works!
    </p>
  `,
  styles: ``
})
export class RoutChild2Component {

}
