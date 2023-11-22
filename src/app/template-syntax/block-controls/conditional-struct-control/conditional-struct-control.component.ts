import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conditional-struct-control',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './conditional-struct-control.component.html',
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
export class ConditionalStructControlComponent {
  showDate = new FormControl(false, {
    nonNullable: true,
    validators: Validators.requiredTrue,
  });
  notDateContent = 'Sin fecha';
  currentDate = new Date();
  example1SimpleConditionalCode = `
    @if (showDate.valid) {
      <p>{{ currentDate | date }}</p>
    }`;
  example1SimpleOldConditionalCode = `
    <p *ngIf="showDate.valid">{{ currentDate | date }}</p>`;

  showDateExample2 = new FormControl(false, {
    nonNullable: true,
    validators: Validators.requiredTrue,
  });

  example2ConditionalCodeIfElse = `
    @if (showDateExample2.valid) {
      <p><b>Fecha:</b>{{ currentDate | date }}</p>
    } @else {
      <p>Sin fecha</p>
    }`;

  oldConditionalCodeIfElse = `
  <p *ngIf="showDateExample2.valid; else notDateBlock">
    <b>Fecha:</b>{{ currentDate | date }}
  </p>
  <ng-template #notDateBlock>
    <p>{{ notDateContent }}</p>
  </ng-template>
  
  <!-- or -->

  <p *ngIf="showDateExample2.valid">
    <b>Fecha:</b>{{ currentDate | date }}
  </p>
  <p *ngIf="!showDateExample2.valid">{{ notDateContent }}</p>
  `;

  formColor = new FormGroup({
    favoriteColor: new FormControl<string>('', { nonNullable: true }),
  });

  //colorValueText: string = this.formColor.get('favoriteColor')!.value;
  get colorValueText$(): Observable<string> {
    return (this.formColor.get('favoriteColor') as FormControl<string>)
      .valueChanges;
  }

  example3ConditionalCodeIfElse = `
  @if (colorValueText$ | async; as selectedColor) {
    <div>
      <h4>Color seleccionado es:</h4>
      <p>
        @if (selectedColor==='red') { 
          Rojo 
        } @else if (selectedColor==='green') { 
          Verde 
        } @else { 
          Azul 
        }
      </p>
    </div>
  }`;
}
