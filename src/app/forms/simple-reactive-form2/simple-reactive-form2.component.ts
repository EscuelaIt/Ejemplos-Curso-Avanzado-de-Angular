import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-simple-reactive-form2',
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
    <h3>Ejemplo 2 Reactive Form basico</h3>

    <div class="example-form">
      Validamos campos a traves de la propiedad miFormulario
    </div>
    <div>
      <form [formGroup]="miFormulario">
        <mat-form-field appearance="fill" class="example-full-width">
          <mat-label>Campo basico de formulario requerido</mat-label>
          <input
            matInput
            type="text"
            formControlName="miControl"
            placeholder="Introduzca datos"
          />
        </mat-form-field>
        <mat-form-field appearance="fill" class="example-full-width">
          <mat-label>Campo basico de formulario tipo email</mat-label>
          <input
            matInput
            type="text"
            formControlName="otroControl"
            placeholder="Introduzca datos"
          />
        </mat-form-field>
        <div
          *ngIf="
            miFormulario.get('miControl')!.invalid &&
            miFormulario.get('miControl')!.touched
          "
        >
          Este campo es requerido.
        </div>
      </form>
    </div>
  `,
  styles: ``,
})
export class SimpleReactiveForm2Component {
  miFormulario = new FormGroup({
    miControl: new FormControl('', [Validators.required]),
    // Puedes agregar más controles aquí
    otroControl: new FormControl('', [Validators.required, Validators.email]),
  });
}
