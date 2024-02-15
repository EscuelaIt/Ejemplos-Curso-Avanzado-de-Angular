import { Injectable, inject } from '@angular/core';
import { CustomData3Service } from './custom-data3.service';

@Injectable({
  providedIn: 'root'
})
export class CustomData2Service {
  private serviceData3 = inject(CustomData3Service);
  constructor() { }

  getDataFromData2(): boolean {
    return true;
  }

  getDataFromData2v3(): number {
    return this.serviceData3.getDataFromData3();
  }
}
