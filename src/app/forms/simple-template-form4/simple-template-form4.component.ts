import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Address } from '../../models/address';

@Component({
  selector: 'app-simple-template-form4',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
  ],
  template: `
    <h3>Ejemplo 4 Template Form básicos</h3>
    <div class="example-form padding-10 margin-20">
      Aqui usamos la directiva <b>ngForm</b> y variables d eplantilla para
      acceder al control de cada elemento del formulario y usar propiedades de
      estado como:
      <ul>
        <li>valid</li>
        <li>touched</li>
        <li>dirty</li>
      </ul>
    </div>

    <div class="example-form">
      <form #addressForm="ngForm">
        <mat-form-field appearance="fill">
          <mat-label>Calle</mat-label>
          <input
            matInput
            #streetInput="ngModel"
            placeholder="Ingresa la calle"
            [(ngModel)]="address.street"
            name="street"
            required
          />
          <mat-error *ngIf="streetInput.touched && streetInput.invalid"
            >La calle es requerida.</mat-error
          >
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Ciudad</mat-label>
          <input
            matInput
            #cityInput="ngModel"
            placeholder="Ingresa la ciudad"
            [(ngModel)]="address.city"
            name="city"
            required
          />
          <mat-error *ngIf="cityInput.touched && cityInput.invalid"
            >La ciudad es requerida.</mat-error
          >
        </mat-form-field>

        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Estado</mat-label>
          <input
            matInput
            #stateInput="ngModel"
            placeholder="Ingresa el estado"
            ngModel
            name="state"
            required
          />
          <mat-error *ngIf="stateInput.touched && stateInput.invalid"
            >El estado es requerido.</mat-error
          >
        </mat-form-field>

        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Código Postal</mat-label>
          <input
            type="number"
            matInput
            #zipInput="ngModel"
            placeholder="Ingresa el código postal"
            ngModel
            name="zip"
            required
          />
          <mat-error
            *ngIf="zipInput.invalid && (zipInput.dirty || zipInput.touched)"
            >El zip es requerido</mat-error
          >
        </mat-form-field>

        <button
          mat-raised-button
          color="primary"
          [disabled]="!addressForm.valid"
        >
          Enviar
        </button>

        <!-- Agrega campos adicionales aquí -->

        <button
          mat-raised-button
          color="primary"
          [disabled]="!addressForm.valid"
        >
          Enviar
        </button>
      </form>
    </div>
  `,
  styles: ``,
})
export class SimpleTemplateForm4Component {
  address: Address = {
    street: '',
    city: '',
    state: '',
    zip: 0,
  };
}
