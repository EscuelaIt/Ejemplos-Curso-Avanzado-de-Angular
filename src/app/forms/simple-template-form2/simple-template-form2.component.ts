import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Address } from '../../models/address';

@Component({
  selector: 'app-simple-template-form2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  template: `
    <h3>Ejemplo 2 Template Form básicos</h3>
    <div class="example-form margin-b-10">
      <ul>
        <li>Habilitamos metodo onSubmit en el formulario</li>
        <li>
          Utilizamos parcialmente el ngModel para hacer enlace de una sola
          direccion
        </li>
        <li>Usamos el ngModel sin enlace en campo que no podemos usar</li>
      </ul>
    </div>
    <div class="example-form">
      <form class="example-form" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill" class="example-full-width">
          <mat-label>Calle</mat-label>
          <input
            matInput
            placeholder="Ingresa la calle"
            [(ngModel)]="address.street"
            name="street"
          />
        </mat-form-field>

        <mat-form-field appearance="fill" class="example-full-width">
          <mat-label>Ciudad</mat-label>
          <input
            matInput
            placeholder="Ingresa la ciudad"
            [(ngModel)]="address.city"
            name="city"
          />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Estado</mat-label>
          <input
            matInput
            placeholder="Ingresa el estado"
            [(ngModel)]="address.state"
            name="state"
          />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Código Postal</mat-label>
          <input
            type="number"
            matInput
            placeholder="Ingresa el código postal"
            [ngModel]="address.zip"
            name="zip"
          />
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Comentario</mat-label>
          <input
            matInput
            placeholder="Comentario que no se puede usar"
            ngModel
            name="comentario"
          />
        </mat-form-field>
        <div class="width-100 margin-b-10">
          <button mat-raised-button color="primary">Enviar</button>
        </div>
        <div class="width-100 margin-b-10">
          <button mat-raised-button color="primary" (click)="setZipCode(100)">
            Establecer 100 como codigo postal
          </button>
        </div>
        <div class="width-100">
          <h3>Direccion:</h3>
          {{ address | json }}
        </div>
      </form>
    </div>
  `,
})
export class SimpleTemplateForm2Component {
  address: Address = {
    street: '',
    city: '',
    state: '',
    zip: 0,
  };

  comment: string = 'comentario sin usar';

  onSubmit() {
    console.log(JSON.stringify(this.address));
  }

  setZipCode(zipCode: number) {
    this.address.zip = zipCode;
  }
}
