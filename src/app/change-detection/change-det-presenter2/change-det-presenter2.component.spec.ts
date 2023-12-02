import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetPresenter2Component } from './change-det-presenter2.component';

describe('ChangeDetPresenter2Component', () => {
  let component: ChangeDetPresenter2Component;
  let fixture: ComponentFixture<ChangeDetPresenter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetPresenter2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetPresenter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
