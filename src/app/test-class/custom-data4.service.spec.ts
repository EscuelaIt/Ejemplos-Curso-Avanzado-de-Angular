import { TestBed } from '@angular/core/testing';

import { CustomData4Service } from './custom-data4.service';

describe('CustomData4Service NOT test Bed', () => {

  it('#getValue should return stubbed value from a spy', () => {
    const { masterService, stubValue, customData3ServiceSpy } = setup();
    expect(masterService.getDataFromServ4()).withContext('service returned stub value').toBe(stubValue);
    expect(customData3ServiceSpy.getDataFromData3.calls.count())
    .withContext('spy method was called once').toBe(1);
  })
});


function setup() {

  const customData3ServiceSpy = jasmine.createSpyObj('CustomData3Service', ['getDataFromData3']);
 
  const stubValue = 5;
 
  const masterService = new CustomData4Service(customData3ServiceSpy);
 
  customData3ServiceSpy.getDataFromData3.and.returnValue(stubValue);
 
  return { masterService, stubValue, customData3ServiceSpy };
 
 }
 