import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForm1Component } from './template-form1.component';

describe('TemplateForm1Component', () => {
  let component: TemplateForm1Component;
  let fixture: ComponentFixture<TemplateForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateForm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
