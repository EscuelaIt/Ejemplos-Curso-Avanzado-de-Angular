import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form2.component.html',
  styleUrl: './template-form2.component.css'
})
export class TemplateForm2Component {
  nombre = 'Mi nombre';
  email = 'miemail@aaa.ee';

  enviarFormulario(miFormulario: NgForm) {
    console.log(miFormulario.form.value);
  }
}
