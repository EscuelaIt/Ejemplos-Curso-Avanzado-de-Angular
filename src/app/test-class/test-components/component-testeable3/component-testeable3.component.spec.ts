import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentTesteable3Component } from './component-testeable3.component';
import { DebugElement } from '@angular/core';

describe('ComponentTesteable3Component', () => {
  let component: ComponentTesteable3Component;
  let fixture: ComponentFixture<ComponentTesteable3Component>;
  let h1: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ComponentTesteable3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentTesteable3Component);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('banner works!');
  })

  it('should find the <p>', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerElement: HTMLElement = bannerDe.nativeElement;
    const p = bannerElement.querySelector('p');
    expect(p?.textContent).toContain('banner works!');
  })

  it('should display a h1 with same value of title 1', () => {
    fixture.detectChanges();
    const titulo = 'Titulo por defecto - test que falla';
    expect(h1.textContent).toContain(titulo);
  })

  it('should display a h1 with same value of title', () => {
    const titulo = 'Mi titulo';
    component.title = titulo;
    fixture.detectChanges();
    expect(h1.textContent).toContain(titulo);
  })
});
