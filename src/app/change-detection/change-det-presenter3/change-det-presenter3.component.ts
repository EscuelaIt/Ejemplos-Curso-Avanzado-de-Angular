import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONS, PERSONS2 } from './data';
import { Person } from './Person';
import { fibonacciPoorPerformance } from '../change-det-presenter3/fibonacci';

@Component({
  selector: 'app-change-det-presenter3',
  standalone: true,
  imports: [CommonModule],
  template: ` 
    @defer () {
      <ul>
        @for (person of listOfPersons; track person.name) {
          <li>name: {{ person.name }} -- number: {{ calculateDays(person.daysWorked) }}</li>
        } 
      </ul>
    } @placeholder() {
      <p>Cargando datos..</p>
    }
    
  `,
  styles: ``,
})
export class ChangeDetPresenter3Component {
  @Input({ required: true }) listOfPersons!: Person[];

  calculateDays(days: number): number {
    return fibonacciPoorPerformance(days);
  }
  
  
}


