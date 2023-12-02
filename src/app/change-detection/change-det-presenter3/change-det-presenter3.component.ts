import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { persons } from './data';

@Component({
  selector: 'app-change-det-presenter3',
  standalone: true,
  imports: [CommonModule],
  template: ` 
    <ul>
      @for (person of listOfPersons; track person.name) {
        <li>name: {{ person.name }} -- number: {{ fibonacciPoorPerformance(person.daysWorked) }}</li>
      } 
    </ul>
  `,
  styles: ``,
})
export class ChangeDetPresenter3Component {
  listOfPersons = persons;

  public fibonacciPoorPerformance(n: number): number {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return this.fibonacciPoorPerformance(n - 1) + this.fibonacciPoorPerformance(n - 2);
    }
  }
  
}


