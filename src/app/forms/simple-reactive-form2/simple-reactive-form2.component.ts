import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
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
    state: new FormControl<string>('', []),
    zip: new FormControl(0, [Validators.required, Validators.min(100)]),
  });

  /**
   * Ejemplo de formulario no tipado
   */
  private myUntypedForm = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
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

  cityIsValid(): boolean {
    return !(
      (this.addressFormGroup.get('city')!.touched ||
        this.addressFormGroup.get('city')!.dirty) &&
      this.addressFormGroup.get('city')!.invalid
    );
  }

  setDefaultFormGroupValue() {
    this.addressFormGroup.setValue({
      city: 'city',
      state: 'state',
      street: 'street',
      zip: 1000,
    });
  }
}

interface ReactiveAddress {
  street: AbstractControl<string | null>;
  city: AbstractControl<string | null>;
  state: AbstractControl<string | null>;
  zip: FormControl<number | null>;
}
