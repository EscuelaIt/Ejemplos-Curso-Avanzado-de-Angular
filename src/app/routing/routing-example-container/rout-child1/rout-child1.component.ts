import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-rout-child1',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <p>
      rout-child1 works!
    </p>
    <div>
      <li><a routerLink="../child2" routerLinkActive="actived-route" ariaCurrentWhenActive="page">Ruta padre</a></li>
    </div>
    <div>
      <button (click)="navigateToChild2()">Navegar a hermano child2</button>
    </div>
  `,
  styles: ``
})
export class RoutChild1Component {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  navigateToChild2() {
    this.router.navigate(['child2'], { relativeTo: this.route.parent });
  }
  
}
