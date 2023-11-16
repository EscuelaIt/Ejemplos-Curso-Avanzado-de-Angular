import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormRecord,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-reactive-form6',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  template: `
    <h1>Ejemplo 6 Reactive Form</h1>
    <div class="example-form padding-10 margin-20">
      En este ejemplo usamos elementos de formularios como radiobuttons y
      checkboxes
    </div>
    <form [formGroup]="miFormulario" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <input matInput formControlName="campoTexto" placeholder="Texto" />
      </mat-form-field>

      <mat-radio-group formControlName="opcionRadio">
        <mat-radio-button value="opcion1">Opción 1</mat-radio-button>
        <mat-radio-button value="opcion2">Opción 2</mat-radio-button>
      </mat-radio-group>

      <mat-checkbox formControlName="checkAcepto"
        >Acepto los términos</mat-checkbox
      >

      <button type="submit" mat-raised-button>Enviar</button>
    </form>
  `,
  styles: ``,
})
export class ReactiveForm6Component {
  private fb = inject(FormBuilder);

  miFormulario = this.fb.group({
    campoTexto: [''],
    opcionRadio: ['opcion1'],
    checkAcepto: [false],
  });

  onSubmit() {
    console.warn(this.miFormulario.value);
  }
}
