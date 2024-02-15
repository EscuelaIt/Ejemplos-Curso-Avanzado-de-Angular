import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomData3Service {
  constructor() { }

  getDataFromData3(): number {
    return 7;
  }
}
