import { TestBed } from '@angular/core/testing';

import { CustomData2Service } from './custom-data2.service';
import { CustomData3Service } from './custom-data3.service';

describe('CustomData2Service', () => {
  let service2: CustomData2Service;
  let customData3ServiceSpy: jasmine.SpyObj<CustomData3Service>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CustomData3Service', ['getDataFromData3'])
    TestBed.configureTestingModule({
      providers: [CustomData2Service, { provide: CustomData3Service, useValue: spy }]
    });
    service2 = TestBed.inject(CustomData2Service);
    customData3ServiceSpy = TestBed.inject(CustomData3Service) as jasmine.SpyObj<CustomData3Service>;
  });

  it('should be created', () => {
    expect(service2).toBeTruthy();
  });

  it('Caso 2', () => {
    const stubValue = 1;
    customData3ServiceSpy.getDataFromData3.and.returnValue(stubValue)
    expect(service2.getDataFromData2v3()).withContext('should be 1').toBe(stubValue);
    expect(customData3ServiceSpy.getDataFromData3.calls.count()).withContext('should be called once').toBe(1);
  });
});
