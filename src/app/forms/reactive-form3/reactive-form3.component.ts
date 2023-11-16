import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-reactive-form3',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  template: ` <h3>Ejemplo 3 Reactive Form</h3>
    <div class="example-form padding-10 margin-20">
      En este ejemplo usamos FormGroups anidados
      <ul>
        <li>
          Usamos <b>formGroupName</b> para especificar la propiedad que hace
          referencia a otro FormGroup anidado
        </li>
        <li>
          La directiva <b>formGroupName</b> la especificamos en el elemento html
          que agrupa a los elementos del formulario
        </li>
        <li>
          Dentro del <b>formGroupName</b> hacemos referencia directa a la
          propiedad con el <b>formControlName</b>
        </li>
      </ul>
    </div>
    <div class="example-form">
      <form [formGroup]="studentForm" (ngSubmit)="onSubmit()">
        <div>
          <div class="margin-b-10">
            <mat-form-field appearance="fill">
              <mat-label>Nombre completo</mat-label>
              <input
                matInput
                placeholder="Ingresa nombre completo"
                formControlName="fullName"
              />
            </mat-form-field>
            <mat-form-field appearance="fill">
              <mat-label>Email</mat-label>
              <input
                matInput
                placeholder="Ingresa email"
                formControlName="email"
              />
            </mat-form-field>
          </div>
          <div class="margin-b-10">
            <mat-divider></mat-divider>
          </div>
          <div formGroupName="address">
            <mat-form-field appearance="fill">
              <mat-label>Calle</mat-label>
              <input
                matInput
                placeholder="Ingresa la calle"
                name="street"
                formControlName="street"
                required
              />
            </mat-form-field>

            <mat-form-field appearance="fill">
              <mat-label>Ciudad</mat-label>
              <input
                matInput
                placeholder="Ingresa la ciudad"
                name="city"
                formControlName="city"
              />
            </mat-form-field>

            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Estado</mat-label>
              <input
                matInput
                placeholder="Ingresa el estado (Opcional)"
                name="state"
                formControlName="state"
              />
            </mat-form-field>

            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Código Postal (Mayor que 100)</mat-label>
              <input
                type="number"
                matInput
                placeholder="Ingresa el código postal"
                name="studentForm.address.zip"
                formControlName="zip"
              />
            </mat-form-field>
          </div>
          <div>
            <mat-label>Aceptar gestion de datos</mat-label>
            <mat-checkbox formControlName="acceptDataManage"
              >Accepta Gestion de sus datos</mat-checkbox
            >

            @if ( studentForm.get('acceptDataManage')!.invalid &&
            (studentForm.get('acceptDataManage')!.touched ||
            studentForm.get('acceptDataManage')!.dirty)) {
            <mat-error>Debe aceptar la gestion de sus datos</mat-error>
            }
          </div>
        </div>
        <div class="margin-b-10">
          <button
            type="submit"
            mat-raised-button
            color="primary"
            [disabled]="!studentForm.valid"
          >
            Enviar
          </button>
        </div>
        <div class="example-form">
          Form Student Value: {{ studentForm.value | json }}
        </div>
        <div class="example-form">Form is valid: {{ studentForm.valid }}</div>
      </form>
    </div>`,
})
export class ReactiveForm3Component {
  private addressFormGroup = new FormGroup({
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', []),
    zip: new FormControl(0, [Validators.required, Validators.min(100)]),
  });

  studentForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(18, [Validators.required, Validators.min(18)]),
    address: this.addressFormGroup,
    acceptDataManage: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    if (this.studentForm.valid) {
      console.warn(this.studentForm.value);
    } else {
      console.error('Formulario invalido');
    }
  }
}
