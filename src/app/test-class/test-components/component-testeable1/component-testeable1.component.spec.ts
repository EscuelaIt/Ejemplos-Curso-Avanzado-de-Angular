import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTesteable1Component } from './component-testeable1.component';
import { MyBook2 } from './my-book2';
import { first } from 'rxjs';

describe('ComponentTesteable1Component', () => {
  it('evento debe ser lanzado cuando hagamos click', () => {
    
    const myComponent = new ComponentTesteable1Component();
    const book: MyBook2 = { id: 1, title: 'Titulo'};
    myComponent.book = book;

    myComponent.selected.pipe(first()).subscribe(selectedBook => {
      expect(selectedBook).toEqual(book);
    })

    myComponent.click();


  
  })
});
