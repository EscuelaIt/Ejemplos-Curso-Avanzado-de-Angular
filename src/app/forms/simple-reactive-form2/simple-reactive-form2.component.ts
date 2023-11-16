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
  templateUrl: './simple-reactive-form2.html',
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

  setCityValue(cityName: string) {
    this.addressFormGroup.controls.city.setValue(cityName);
  }
}

interface ReactiveAddress {
  street: AbstractControl<string | null>;
  city: AbstractControl<string | null>;
  state: AbstractControl<string | null>;
  zip: FormControl<number | null>;
}
