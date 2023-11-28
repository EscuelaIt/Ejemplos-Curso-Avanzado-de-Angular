import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferedContent1Component } from './defered-content-1/defered-content-1.component';
import { DeferedContentWithErrorComponent } from './defered-content-with-error/defered-content-with-error.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-defer-1',
  standalone: true,
  imports: [
    CommonModule,
    DeferedContent1Component,
    MatTabsModule,
    MatDividerModule
  ],
  templateUrl: './defer-1.component.html',
  styles: ``,
})
export class Defer1Component  {

  allowedShow = false;
  prefechData = true;

  setAllowedShow() {
    this.allowedShow = true;
  }

  example_defer_code = `
    @defer {
      <contenido-aplazado/>
    } @placeholder (....) {
      ...
    } @loading (......) {
      ...
    } @error {
      ...
    }
  `;

}
