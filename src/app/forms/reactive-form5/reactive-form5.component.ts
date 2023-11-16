import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormRecord,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-form5',
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
  templateUrl: './reactive-form5.component.html',
})
export class ReactiveForm5Component {
  private formBuilder = inject(FormBuilder);
  public contactForm = new FormRecord<FormControl<string | null>>({});

  constructor() {
    this.contactForm.addControl(
      'Alberto',
      new FormControl('Direccion de Alberto')
    );
    this.contactForm.addControl('Maria', new FormControl('Direccion de Maria'));
  }

  addContact(name: string, phoneNumber: string): void {
    this.contactForm.addControl(
      name,
      this.formBuilder.control(phoneNumber, Validators.required)
    );
  }

  public getContactName() {
    console.log(this.contactForm.controls);
    return this.contactForm.controls;
  }

  get contactsKeys(): string[] {
    return Object.keys(this.contactForm.controls);
  }
}
