import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetPresenter4Component } from './change-det-presenter4.component';

describe('ChangeDetPresenter4Component', () => {
  let component: ChangeDetPresenter4Component;
  let fixture: ComponentFixture<ChangeDetPresenter4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetPresenter4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetPresenter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
