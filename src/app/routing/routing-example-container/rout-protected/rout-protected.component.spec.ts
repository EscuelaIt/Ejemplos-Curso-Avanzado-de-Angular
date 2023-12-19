import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutProtectedComponent } from './rout-protected.component';

describe('RoutProtectedComponent', () => {
  let component: RoutProtectedComponent;
  let fixture: ComponentFixture<RoutProtectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutProtectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
