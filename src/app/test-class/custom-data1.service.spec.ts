import { TestBed } from '@angular/core/testing';

import { CustomData1Service } from './custom-data1.service';

function sumar(val1: number, val2: number): number {
  return val1 + val2
}

describe('CustomData1Service', () => {
  let myService: CustomData1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomData1Service]
    });
    myService = TestBed.inject(CustomData1Service);
  });

  it('should be created', () => {
    expect(myService).toBeTruthy();
  });

  it('should return true', () => {
    expect(myService.getData1()).toBe(true);
  });

});
