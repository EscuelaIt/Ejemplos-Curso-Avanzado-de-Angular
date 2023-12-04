import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-det-presenter2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="bg-color-orange">
      <h1>Componente ChangeDetPresenter2</h1>
      <button (click)="sendDataToFather()">Lanzo evento on click</button>
    </div>
  `,
  styles: ``,
})
export class ChangeDetPresenter2Component implements OnChanges {
  @Input({ required: true }) propiedadEntrada!: string;
  @Output() valorSalida = new EventEmitter<string>();

  sendDataToFather() {
    this.valorSalida.emit('nuevo valor emitido');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes in ChangeDetPresenter2Component:`, changes);
  }

}
