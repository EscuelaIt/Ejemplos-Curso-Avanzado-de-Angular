import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutChild3Component } from './rout-child3.component';

describe('RoutChild3Component', () => {
  let component: RoutChild3Component;
  let fixture: ComponentFixture<RoutChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutChild3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
