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
  public addContactForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor() {
    this.contactForm.addControl('Pedro', new FormControl('Direccion de Pedro'));
    this.contactForm.addControl('Maria', new FormControl('Direccion de Maria'));
  }

  addContact(name: string, address: string): void {
    this.contactForm.addControl(name, this.formBuilder.control(address));
  }

  removeContact(name: string) {
    this.contactForm.removeControl(name);
  }

  public getContactName() {
    return this.contactForm.controls;
  }

  get contactsKeys(): string[] {
    return Object.keys(this.contactForm.controls);
  }

  saveContact() {
    const name = this.addContactForm.get('name')!.value;
    const address = this.addContactForm.get('address')!.value;
    if (name && address) {
      this.addContact(name, address);
    }

    this.addContactForm.reset();
  }
}
