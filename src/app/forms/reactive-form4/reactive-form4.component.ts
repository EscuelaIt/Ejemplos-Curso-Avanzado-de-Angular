import { Component, inject } from '@angular/core';
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

  acceptDataManageControlIsInvalid() {
    return (
      this.studentForm.controls.acceptDataManage.invalid &&
      (this.studentForm.controls.acceptDataManage.touched ||
        this.studentForm.controls.acceptDataManage.dirty)
    );
  }
}
