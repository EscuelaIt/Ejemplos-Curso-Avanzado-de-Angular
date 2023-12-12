import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExampleContainerComponent } from './routing-example-container.component';

describe('RoutingExampleContainerComponent', () => {
  let component: RoutingExampleContainerComponent;
  let fixture: ComponentFixture<RoutingExampleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingExampleContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingExampleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
