import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../Person';
import { fibonacciPoorPerformance } from '../fibonacci';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-det-presenter4',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="bg-color-yellow">
    <h2>Lista de personas 2</h2>
    @defer () {
      <ul>
        @for (person of listOfPersons | async; track person.name) {
          <li>name: {{ person.name }} -- number: {{ calculateDays(person.daysWorked) }}</li>
        }
      </ul>
    } @placeholder() {
      <p>Cargando datos..</p>
    }
  </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetPresenter4Component implements OnChanges{
  @Input({ required: false }) listOfPersons!: Observable<Person[]>;
  // @Input({ required: true }) filter!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Changes in ChangeDetPresenter4Component are:`, changes)
  }

  calculateDays(days: number): number {
    return fibonacciPoorPerformance(days);
  }
}
