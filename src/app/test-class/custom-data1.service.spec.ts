import { TestBed } from '@angular/core/testing';

import { CustomData1Service } from './custom-data1.service';

describe('CustomData1Service', () => {
  let service: CustomData1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomData1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  

});
