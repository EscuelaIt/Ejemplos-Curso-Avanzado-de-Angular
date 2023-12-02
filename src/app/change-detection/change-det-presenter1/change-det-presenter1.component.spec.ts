import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetPresenter1Component } from './change-det-presenter1.component';

describe('ChangeDetPresenter1Component', () => {
  let component: ChangeDetPresenter1Component;
  let fixture: ComponentFixture<ChangeDetPresenter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetPresenter1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetPresenter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
