import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-simple-reactive-form1',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
  ],
  template: `
    <h3>Ejemplo 1 Reactive Form (Ejemplo Básico)</h3>

    <div class="example-form">
      <mat-form-field appearance="fill" class="example-full-width">
        <mat-label>Campo basico de formulario requerido</mat-label>
        <input
          matInput
          type="text"
          [formControl]="inputRequired"
          placeholder="Introduzca datos"
        />
      </mat-form-field>
      <mat-form-field appearance="fill" class="example-full-width">
        <mat-label>Campo basico de formulario tipo email</mat-label>
        <input
          matInput
          type="text"
          [formControl]="inputEmail"
          placeholder="Introduzca email"
        />
      </mat-form-field>
      <div>
        <h2>
          Copia Email con asyncPipe: {{ inputEmail.valueChanges | async }}
        </h2>
        <h2>Copia Email con subscribe: {{ email }}</h2>
        <h2>Copia Email con value: {{ inputEmail.value }}</h2>
      </div>
    </div>
  `,
  styles: ``,
})
export class SimpleReactiveForm1Component {
  inputRequired: FormControl = new FormControl('Mi campo de formulario', [
    Validators.required,
  ]);
  inputEmail = new FormControl('', [Validators.email]);
  email = '';

  constructor() {
    this.inputEmail.valueChanges.subscribe((emailValue) => {
      this.email = emailValue!;
    });
  }
}
