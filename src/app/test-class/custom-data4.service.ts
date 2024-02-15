import { Injectable, inject } from '@angular/core';
import { CustomData3Service } from './custom-data3.service';

@Injectable({
  providedIn: 'root'
})
export class CustomData4Service {
  
  constructor(private dependencyServ: CustomData3Service) { }

  getDataFromServ4(): number {
    return this.dependencyServ.getDataFromData3();
  }
}
