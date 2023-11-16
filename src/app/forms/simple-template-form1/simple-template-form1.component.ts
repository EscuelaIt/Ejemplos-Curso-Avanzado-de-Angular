import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-simple-template-form1',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule],
  template: `
    <h3>Ejemplo 1 Template Form básicos</h3>

    <div class="example-form">
      Nota Importante: Los campos de formularios de tipo plantilla que se
      encuentran dentro de una etiqueta form siempre deben tener un atributo
      name unico en el formulario para que angular haga el seguimiento correcto
      del campo dentro del propio formulario
    </div>

    <div class="example-form">
      <mat-form-field appearance="fill" class="example-full-width">
        <mat-label
          >Campo basico fuera de formulario sin atributo name</mat-label
        >
        <input
          matInput
          type="text"
          [(ngModel)]="inputField"
          placeholder="Introduzca datos"
        />
      </mat-form-field>
    </div>
    <div class="example-form">
      <form>
        <mat-form-field appearance="fill" class="example-full-width">
          <mat-label
            >Campo basico dentro de formulario con atributo name</mat-label
          >
          <input
            matInput
            type="text"
            [(ngModel)]="inputField"
            placeholder="Introduzca datos"
            name="myInputField"
          />
        </mat-form-field>
        <mat-form-field appearance="fill" class="example-full-width">
          <mat-label
            >Campo basico dentro de formulario con atributo name</mat-label
          >
          <input
            matInput
            type="text"
            [(ngModel)]="otherInputField"
            placeholder="Introduzca datos"
            name="otherInputField"
          />
        </mat-form-field>
      </form>
    </div>
  `,
})
export class SimpleTemplateForm1Component {
  inputField = '';
  otherInputField = '';
}
