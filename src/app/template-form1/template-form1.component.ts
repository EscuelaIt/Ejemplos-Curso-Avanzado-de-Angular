import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form1.component.html',
  styleUrl: './template-form1.component.css'
})
export class TemplateForm1Component {
  favoriteColor = '';
}
