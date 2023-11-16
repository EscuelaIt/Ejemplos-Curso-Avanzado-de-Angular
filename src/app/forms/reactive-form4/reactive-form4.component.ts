import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-form4',
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
  templateUrl: './reactive-form4.component.html',
})
export class ReactiveForm4Component {
  private formBuilder = inject(FormBuilder);

  private addressFormGroup = this.formBuilder.group({
    street: ['', Validators.required],
    city: ['', [Validators.required]],
    state: [''],
    zip: [0, [Validators.required, Validators.min(100)]],
  });

  studentForm = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [18, [Validators.required, Validators.min(18)]],
    address: this.addressFormGroup,
    acceptDataManage: [false, [Validators.requiredTrue]],
    phones: this.formBuilder.array([
      this.formBuilder.control(
        { value: 2323, disabled: true },
        { validators: [Validators.required] }
      ),
    ]),
  });

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.warn(this.studentForm.value);
    } else {
      console.error('Formulario invalido');
    }
  }

  acceptDataManageControlIsInvalid(): boolean {
    return (
      this.studentForm.controls.acceptDataManage.invalid &&
      (this.studentForm.controls.acceptDataManage.touched ||
        this.studentForm.controls.acceptDataManage.dirty)
    );
  }

  fillRequiredFields(): void {
    this.studentForm.patchValue({
      fullName: 'Nombre',
      email: 'default@email.com',
      age: 21,
      acceptDataManage: true,
      address: {
        street: '123 Drew Street',
        city: 'Barcelona',
        zip: 10004,
      },
    });
  }

  resetStudentForm(): void {
    this.studentForm.reset();
  }

  // Mas peligroso en tiempo de ejecucion porque el metodo contains no valida un FormArray
  getPhones(): FormArray {
    return this.studentForm.controls.phones;
  }

  // Mas seguro en tiempo de ejecucion
  getPhonesV2(): FormArray {
    return this.studentForm.get('phones') as FormArray;
  }

  addPhone(): void {
    this.getPhones().push(this.formBuilder.control(null));
  }

  removePhone(phoneIndex: number): void {
    this.getPhones().removeAt(phoneIndex);
  }
}
