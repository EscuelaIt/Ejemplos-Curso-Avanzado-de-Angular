import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../Person';
import { fibonacciPoorPerformance } from '../fibonacci';

@Component({
  selector: 'app-change-det-presenter3',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="bg-color-blue">
    <h2>Lista de personas 1</h2>
    @defer () {
      <ul>
        @for (person of listOfPersons; track person.name; ) {
          @if (filter === '' || (filter !== '' && (person.name).toLowerCase().includes(filter.toLocaleLowerCase()))) {
            <li>name: {{ person.name }} -- number: {{ calculateDays(person.daysWorked) }}</li>
          }
        }
      </ul>
    } @placeholder() {
      <p>Cargando datos..</p>
    }
  </div>
  `,
  styles: ``,
})
export class ChangeDetPresenter3Component implements OnInit, OnChanges {
  
  @Input({ required: true }) listOfPersons!: Person[];
  @Input({ required: true }) filter!: string;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Changes in ChangeDetPresenter3Component are:`, changes)
  }

  calculateDays(days: number): number {
    return fibonacciPoorPerformance(days);
  }


}


