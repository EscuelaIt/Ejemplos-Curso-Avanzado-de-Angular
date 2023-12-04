import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONS, PERSONS2 } from '../data';
import { fibonacciPoorPerformance } from '../fibonacci';

@Component({
  selector: 'app-example-signal',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <div>
      <button (click)="changeSignalValueDirectly()">Establecer valor a 40</button>
      <button (click)="changeSignalValue()">Incrementar valor sumando 5</button>
      <button (click)="cambiarCalulo()">Cambiar calculo</button>
      <p>Values of writable signal {{ mutableNumberValue() }}</p>
    </div>
    <div>
      <button (click)="changeSignalVisibility()">Change visibility</button>
      <button (click)="changeSignalValue()">Change value</button>
      <p>Value is {{ conditionalCount() }}</p>
    </div>
  </div>`,
  styles: ``,
})
export class ExampleSignalComponent {

  private data = PERSONS2;
  private data2 = PERSONS;

  mutableNumberValue: WritableSignal<number> = signal(0);
  mutableConditionValue: WritableSignal<boolean> = signal(false);
  otherSignal: Signal<number> = this.mutableNumberValue.asReadonly();

  ejemploDatosComplejos = signal(this.calculo())


  calculo(){
    console.log('calculando');
    return this.data.map(value => fibonacciPoorPerformance(value.daysWorked));
  }

  calculo2(){
    console.log('calculando');
    return this.data2.map(value => fibonacciPoorPerformance(value.daysWorked));
  }

  conditionalCount = computed(() => {
    if (this.mutableConditionValue()) {
      return this.ejemploDatosComplejos()
    } else {
      return 'Nothing to see here!';
    }
  });

  changeSignalValueDirectly() {
    this.mutableNumberValue.set(40);
  }

  changeSignalValue() {
    this.mutableNumberValue.update((value) => value + 5);
  }

  changeSignalVisibility() {
    this.mutableConditionValue.update((value) => !value);
  }

  cambiarCalulo() {
    this.ejemploDatosComplejos.set(this.calculo2())
  }
}
