import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTesteable2Component } from './component-testeable2.component';
import { DependencyCt2Service } from './dependency-ct2.service';

class MockDependencyCt2Service {
  name = 'User'
  isLoggedIn = true;
}

describe('ComponentTesteable2Component', () => {
  let component: ComponentTesteable2Component;
  let dependency: DependencyCt2Service

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComponentTesteable2Component,
        { provide: DependencyCt2Service, useClass: MockDependencyCt2Service }
      ]
    })

    component = TestBed.inject(ComponentTesteable2Component);
    dependency = TestBed.inject(DependencyCt2Service);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have myText message', () => {
    expect(component.myText).toBe('');
  });

  it('should have a text in myText after call ngOnInit method', () => {
    component.ngOnInit();
    expect(component.myText).toBe('IsLogged User');
  });

  it('should ask user to log in', () => {
    dependency.isLoggedIn=false;
    component.ngOnInit();
    expect(component.myText).toBe('Please log in');
  });
});
