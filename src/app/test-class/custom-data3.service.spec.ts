import { TestBed } from '@angular/core/testing';

import { CustomData3Service } from './custom-data3.service';

describe('CustomData3Service', () => {
  let service: CustomData3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomData3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
