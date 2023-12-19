import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SimpleTemplateForm1Component } from '../../forms/simple-template-form1/simple-template-form1.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MenuFormsComponent } from '../menu-forms/menu-forms.component';
import { MenuBlockControlComponent } from '../menu-block-control/menu-block-control.component';

@Component({
  selector: 'app-menu-container',
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
    MenuBlockControlComponent
  ],
  templateUrl: './menu-container.component.html',
  styles: `.route-actived {
    color: red;
  }`
})
export class MenuContainerComponent {

}
