import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../Person';
import { fibonacciPoorPerformance } from '../fibonacci';

@Component({
  selector: 'app-change-det-presenter3',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="bg-color-blue">
    <h2>Lista de personas 1</h2>
    @defer () {
      <ul>
        @for (person of listOfPersons; track person.name) {
          <li>name: {{ person.name }} -- number: {{ calculateDays(person.daysWorked) }}</li>
        }
      </ul>
    } @placeholder() {
      <p>Cargando datos..</p>
    }
  </div>

  `,
  styles: ``,
})
export class ChangeDetPresenter3Component {
  @Input({ required: true }) listOfPersons!: Person[];

  calculateDays(days: number): number {
    return fibonacciPoorPerformance(days);
  }


}


