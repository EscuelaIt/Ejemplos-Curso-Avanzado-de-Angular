import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-reactive-form7',
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
  templateUrl: './reactive-form7.component.html',
  styles: ``,
})
export class ReactiveForm7Component {
  private formBuilder = inject(FormBuilder);

  private addressFormGroup = this.formBuilder.group({
    street: ['', Validators.required],
    city: ['', [Validators.required]],
    state: [''],
    zip: [0, [Validators.required, Validators.min(100)]],
  });

  studentForm = this.formBuilder.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        containInvalidCharacterValidator(['@']),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    age: [18, [Validators.required, Validators.min(18)]],
    address: this.addressFormGroup,
    acceptDataManage: [false, [Validators.requiredTrue]],
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

  resetStudentForm(): void {
    this.studentForm.reset();
  }

  fullNameWithMaxLenghtError(): boolean {
    return this.studentForm.get('fullName')!.errors?.['maxlength'];
  }

  fullNameWithRequiredError(): boolean {
    return this.studentForm.get('fullName')!.errors?.['required'];
  }

  fullNameWithIncorrectCharactersError(): boolean {
    return this.studentForm.get('fullName')!.errors?.['incorrectCharacters'];
  }

  fullNameIsInvalid(): boolean {
    return (
      this.studentForm.get('fullName')!.invalid &&
      (this.studentForm.get('fullName')!.touched ||
        this.studentForm.get('fullName')!.dirty)
    );
  }
}

export function containInvalidCharacterValidator(
  invalidCharacters: string[]
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!isValueInString(invalidCharacters, value)) {
      return null;
    }
    return { incorrectCharacters: { value: value } };
  };
}

function isValueInString(array: string[], value: string) {
  return array.some((element) => value.includes(element));
}
