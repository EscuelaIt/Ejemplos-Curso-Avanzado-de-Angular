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
    phones: this.formBuilder.array([this.formBuilder.control(23433434)]),
  });

  onSubmit() {
    if (this.studentForm.valid) {
      console.warn(this.studentForm.value);
    } else {
      console.error('Formulario invalido');
    }
  }

  acceptDataManageControlIsInvalid() {
    return (
      this.studentForm.controls.acceptDataManage.invalid &&
      (this.studentForm.controls.acceptDataManage.touched ||
        this.studentForm.controls.acceptDataManage.dirty)
    );
  }

  fillRequiredFields() {
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

  resetStudentForm() {
    this.studentForm.reset();
  }

  getPhones() {
    return this.studentForm.controls.phones;
  }

  addPhone() {
    this.getPhones().push(this.formBuilder.control(null));
  }

  removePhone(phoneIndex: number) {
    this.getPhones().removeAt(phoneIndex);
  }
}
