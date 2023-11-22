import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-conditional-struct-control-example1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDividerModule],
  template: ` <p>conditional-struct-control-example1 works!</p> `,
  styles: `pre {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }

  code {
      font-family: 'Courier New', Courier, monospace;
  }`,
})
export class ConditionalStructControlExample1Component {}
