import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutChild2Component } from './rout-child2.component';

describe('RoutChild2Component', () => {
  let component: RoutChild2Component;
  let fixture: ComponentFixture<RoutChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
