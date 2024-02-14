import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomData1Service {

  constructor() { }

  getData1(): boolean {
    return true;
  }
}
