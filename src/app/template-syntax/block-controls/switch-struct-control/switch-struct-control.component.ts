import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-struct-control',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div>
        <button (click)="setColor(exampleValues.ROJO)">Set rojo</button>
        <button (click)="setColor(exampleValues.VERDE)">Set verde</button>
        <button (click)="setColor(exampleValues.AMARILLO)">Set otro</button>
      </div>
      <h2>
        @switch (value) { 
          @case (exampleValues.ROJO) { Es rojo } 
          @case (exampleValues.VERDE) { Es verde } 
          @default { Es azul } 
        }
      </h2>
    </div>
    <div>
      <h3>Codigo ejemplo con &#64;switch</h3>
      <pre>
        <code>
        {{ exampleNewCode }} 
        </code>
      </pre>
    </div>
    <div>
      <h3>Codigo ejemplo con &#64;ngSwitch</h3>
      <pre>
        <code>
        {{ exampleOldCode }} 
        </code>
      </pre>
    </div>
  `,
  styles: `pre {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }

  code {
      font-family: 'Courier New', Courier, monospace;
  }`,
})
export class SwitchStructControlComponent {
  
  value = '';
  exampleValues = {
    ROJO: 'rojo',
    VERDE: 'verde',
    AZUL: 'azul',
    AMARILLO: 'amarillo'
  };

  setColor(color: string) {
    this.value=color;
  }

  exampleNewCode = `
    @switch (value) { 
      @case (exampleValues.ROJO) { Es rojo } 
      @case (exampleValues.VERDE) { Es verde } 
      @default { Es azul } 
    }
  `;


  exampleOldCode = `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'rojo'">Es rojo</div>
      <div *ngSwitchCase="'verde'">Es verde</div>
      <div *ngSwitchDefault>Es azul</div>
    </div>
  `;
}
