import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyCt2Service } from './dependency-ct2.service';

@Component({
  selector: 'app-component-testeable2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      component-testeable2 works!
    </p>
  `,
  styles: ``
})
export class ComponentTesteable2Component implements OnInit {
  
  myText = '';
  private dependency = inject(DependencyCt2Service)
  
  ngOnInit(): void {
    this.myText = this.dependency.isLoggedIn ? 'IsLogged ' + this.dependency.name : 'Please log in';
  }
}
