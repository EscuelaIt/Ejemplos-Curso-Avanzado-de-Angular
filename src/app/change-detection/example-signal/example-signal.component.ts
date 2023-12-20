import { Component, EffectRef, Injector, Signal, WritableSignal, computed, effect, signal, untracked } from '@angular/core';
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
    <div>
      <button (click)="startEffect()">Start effect</button>
      <button (click)="stopEffect()">Stop effect</button>
      <button (click)="setNewList()">Asignar nueva lista</button>
    </div>
    <div>
      {{ listCalculated() }}
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
  myEffect!: EffectRef;  

  myList = signal(['madrid']);

  listCalculated = computed(()=> {
    const value = this.myList().length;
    return `date: ${new Date().toTimeString()} + value: ${value}`;
  })
  
  constructor(private injector: Injector) {}

  setNewList() {
    this.myList.set(['madrid']);
  }

  startEffect() {
    this.myEffect = effect((onCleanup)=> {
      console.log('Launched effect');
      //const numberValue = this.readOnlyNumberValue()
      const visibility = this.mutableVisibilityValue();
      const value2 = untracked(() => this.auxCalcul());
      const timer = setTimeout(() => {
        //console.log(`El valor de count es: ${numberValue}`)
        console.log(`El valor de count es: ${value2} y la visibilidad es ${visibility}`)
      }, 2000);

      // Se ejecuta antes de lanzarse el effect y cuando se destruye el effect
      onCleanup(() => {
        clearTimeout(timer);
        // this.logEffectClean();
      }) 
    }, { injector: this.injector });
  }

  auxCalcul(): number {
    return 4 + this.readOnlyNumberValue();
  }

  logEffectClean() {
    console.log('Me he limpiado');
  }

  stopEffect() {
    this.myEffect.destroy();
  }

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
