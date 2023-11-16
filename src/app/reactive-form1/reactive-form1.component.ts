import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form1.component.html',
  styleUrl: './reactive-form1.component.css'
})
export class ReactiveForm1Component {
  name = new FormControl('');
  age: FormControl<number | null> = new FormControl(23);

  update() {
    this.name.setValue('Otro nombre');
  }
}
