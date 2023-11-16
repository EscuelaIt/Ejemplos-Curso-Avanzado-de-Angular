import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-reactive-form3',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
  ],
  template: `<form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
    <mat-form-field appearance="fill">
      <mat-label>Calle</mat-label>
      <input matInput formControlName="street" />
      <mat-error
        *ngIf="
          addressForm.get('street')!.touched &&
          addressForm.get('street')!.invalid
        "
        >La calle es requerida.</mat-error
      >
    </mat-form-field>

    <!-- Agrega los otros campos aquí de manera similar -->

    <button
      mat-raised-button
      color="primary"
      type="submit"
      [disabled]="!addressForm.valid"
    >
      Enviar
    </button>
  </form>`,
  styles: ``,
})
export class ReactiveForm3Component implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  fb = inject(FormBuilder);
  addressForm!: FormGroup;

  ngOnInit() {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    });
  }
}
