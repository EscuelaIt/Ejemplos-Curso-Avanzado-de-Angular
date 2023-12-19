import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONS, PERSONS2 } from '../data';
import { fibonacciPoorPerformance } from '../fibonacci';
import { Person } from '../Person';

@Component({
  selector: 'app-example-signal',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <div>
      <button (click)="changeSignalValueDirectly()">Establecer valor a 40</button>
      <button (click)="incrementSignalValueBy(5)">Incrementar valor sumando 5</button>
      <button (click)="incrementSignalValueBy(10)">Incrementar valor sumando 10</button>
      <p>Count value is {{ mutableCounterValue() }}</p>
    </div>
    <div>
      <button (click)="changeVisibility()">{{ buttonTitleVisibility() }}</button>  
      <button (click)="recalculateWithCheapData()">Recalcular con datos poco costosos</button>
      <button (click)="recalculateWithExpensiveData()">Recalcular con datos muy costosos</button>
      
      <p>Value is {{ conditionalCount() }}</p>
    </div>
  </div>`,
  styles: ``,
})
export class ExampleSignalComponent {

  private personsWithCheapValues = PERSONS;
  private personsWithExpensiveValues = PERSONS2;

  mutableCounterValue: WritableSignal<number> = signal(0);
  mutableVisibilityValue: WritableSignal<boolean> = signal(false);
  readOnlyNumberValue: Signal<number> = this.mutableCounterValue.asReadonly();
  expensiveDataCalculated: WritableSignal<number[]> = signal(this.loadCalculatedPersonData(this.personsWithExpensiveValues))

  loadCalculatedPersonData(persons: Person[]): number[]{
    console.log('running loadCalculatedPersonData');
    return persons.map(value => fibonacciPoorPerformance(value.daysWorked));
  }

  conditionalCount = computed(() => {
    if (this.mutableVisibilityValue()) {
      return this.expensiveDataCalculated()
    } else {
      return 'Nothing to see here!';
    }
  });

  buttonTitleVisibility = computed(() => {
    if (this.mutableVisibilityValue()) {
      return 'Ocultar valores'
    } else {
      return 'Mostrar valores';
    }
  });

  changeSignalValueDirectly() {
    this.mutableCounterValue.set(40);
  }

  incrementSignalValueBy(valueToIncrement: number) {
    this.mutableCounterValue.update((value) => value + valueToIncrement);
  }

  changeVisibility() {
    this.mutableVisibilityValue.update((value) => !value);
  }

  recalculateWithCheapData() {
    this.expensiveDataCalculated.set(this.loadCalculatedPersonData(this.personsWithCheapValues))
  }

  recalculateWithExpensiveData() {
    this.expensiveDataCalculated.set(this.loadCalculatedPersonData(this.personsWithExpensiveValues))
  }
}
