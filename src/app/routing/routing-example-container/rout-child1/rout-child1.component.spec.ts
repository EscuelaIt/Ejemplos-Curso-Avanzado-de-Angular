import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutChild1Component } from './rout-child1.component';

describe('RoutChild1Component', () => {
  let component: RoutChild1Component;
  let fixture: ComponentFixture<RoutChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
