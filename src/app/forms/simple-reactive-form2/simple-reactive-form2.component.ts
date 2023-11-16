import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
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
    <div class="example-form padding-10 margin-20">
      Aqui usamos la clase FormGroup para crear grupos de FormControls
      <ul>
        <li>
          Se usa la directiva <b>formControlName</b> para hacer referencia a la
          propiedad
        </li>
        <li>
          Se puede acceder al formControl especifico con
          <b>addressFormGroup.get('street')</b> para validarlo
        </li>
        <li>
          El form control expone una api con los mismos metodos de
          <b>touched, invalid, dirty</b>
        </li>
        <li>Controlamos los requisitos de los campos desde la clase</li>
        <li>
          Podemos verificar el estado del formulario y sus controles tanto desde
          la clase y desde el template
        </li>
      </ul>
    </div>
    <div class="example-form">
      <form [formGroup]="addressFormGroup" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill">
          <mat-label>Calle</mat-label>
          <input
            matInput
            placeholder="Ingresa la calle"
            name="street"
            formControlName="street"
            required
          />
          @if ( addressFormGroup.get('street')!.invalid &&
          (addressFormGroup.get('street')!.touched ||
          addressFormGroup.get('street')!.dirty)) {
          <mat-error>La calle es requerida.</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Ciudad</mat-label>
          <input
            matInput
            placeholder="Ingresa la ciudad"
            name="city"
            formControlName="city"
          />
          @if ( addressFormGroup.get('city')!.invalid &&
          addressFormGroup.get('city')!.touched &&
          addressFormGroup.get('city')!.dirty) {
          <mat-error>La ciudad es requerida.</mat-error>
          }
        </mat-form-field>

        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Estado</mat-label>
          <input
            matInput
            placeholder="Ingresa el estado (Opcional)"
            name="state"
            formControlName="state"
          />
          @if ( addressFormGroup.get('state')!.invalid &&
          addressFormGroup.get('state')!.touched &&
          addressFormGroup.get('state')!.dirty) {
          <mat-error>El estado es requerido.</mat-error>
          }
        </mat-form-field>

        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Código Postal</mat-label>
          <input
            type="number"
            matInput
            placeholder="Ingresa el código postal"
            name="zip"
            formControlName="zip"
          />
          @if ( addressFormGroup.get('zip')!.invalid &&
          addressFormGroup.get('zip')!.touched &&
          addressFormGroup.get('zip')!.dirty) {
          <mat-error>El codigo postal es requerido.</mat-error>
          }
        </mat-form-field>
        <div class="margin-b-10">
          <button
            type="submit"
            mat-raised-button
            color="primary"
            [disabled]="!addressFormGroup.valid"
          >
            Enviar
          </button>
        </div>
        <div class="margin-b-10">
          <button type="submit" mat-raised-button color="primary">
            Enviar sin validar
          </button>
        </div>
      </form>
    </div>
  `,
})
export class SimpleReactiveForm2Component {
  addressFormGroup = new FormGroup<ReactiveAddress>({
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', []),
    zip: new FormControl(0, [Validators.required, Validators.min(100)]),
  });

  onSubmit() {
    if (this.addressFormGroup.valid) {
      console.warn(this.addressFormGroup.value);
    } else {
      console.error('Formulario invalido');
    }
  }
}

interface ReactiveAddress {
  street: AbstractControl<string | null>;
  city: AbstractControl<string | null>;
  state: AbstractControl<string | null>;
  zip: AbstractControl<number | null>;
}
