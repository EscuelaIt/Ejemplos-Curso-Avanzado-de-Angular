import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Address } from '../../models/address';

@Component({
  selector: 'app-simple-template-form3',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  template: `
    <h3>Ejemplo 3 Template Form básicos</h3>
    <div class="example-form margin-b-10">
      <ul>
        <li>
          Hacemos uso de ngForm a través de la variable de plantilla addressForm
        </li>
        <li>Permite omitir el Two-way binding. (<b>ngModel</b>)</li>
        <li>Requiere pasar el objeto formulario por el metodo onSubmit</li>
        <li>
          Podemos validar el formulario desde el propio template (Ejemplo:
          habilitar boton enviar)
        </li>
      </ul>
    </div>
    <div class="margin-b-10">
      <form
        class="example-form"
        #addressForm="ngForm"
        (ngSubmit)="onSubmit(addressForm)"
      >
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Calle</mat-label>
          <input
            matInput
            placeholder="Ingresa la calle"
            ngModel
            name="street"
            required
          />
        </mat-form-field>

        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Ciudad</mat-label>
          <input
            matInput
            placeholder="Ingresa la ciudad"
            ngModel
            name="city"
            required
          />
        </mat-form-field>

        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Estado</mat-label>
          <input
            matInput
            placeholder="Ingresa el estado"
            ngModel
            name="state"
            required
          />
        </mat-form-field>

        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Código Postal</mat-label>
          <input
            type="number"
            matInput
            placeholder="Ingresa el código postal"
            ngModel
            name="zip"
            required
          />
        </mat-form-field>

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
export class SimpleTemplateForm3Component {
  address: Address = {
    street: '',
    city: '',
    state: '',
    zip: 0,
  };

  onSubmit(form: NgForm) {
    console.warn(form.value);
  }
}
