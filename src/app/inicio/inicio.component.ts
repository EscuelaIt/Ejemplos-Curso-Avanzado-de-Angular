import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  private apiUrl = environment.api;
  private isProduction = environment.production;

  constructor(){
    console.log(`Api url is ${this.apiUrl}`);
    console.log(`Is Production ${this.isProduction}`);
  }

}
