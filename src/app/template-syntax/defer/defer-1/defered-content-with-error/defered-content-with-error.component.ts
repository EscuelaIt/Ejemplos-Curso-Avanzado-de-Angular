import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-defered-content-with-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      defered-content-with-error works!
    </p>
  `,
  styles: ``
})
export class DeferedContentWithErrorComponent {
  private httpClient = inject(HttpClient);

  constructor() {
    
  }
}
