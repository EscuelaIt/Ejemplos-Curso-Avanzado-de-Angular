import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SimpleTemplateForm1Component } from '../../forms/simple-template-form1/simple-template-form1.component';
import { MenuFormsComponent } from '../menu-forms/menu-forms.component';

@Component({
  selector: 'app-menu-block-control',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SimpleTemplateForm1Component,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MenuFormsComponent,
  ],
  templateUrl: './menu-block-control.component.html',
  styles: ``,
})
export class MenuBlockControlComponent {}
