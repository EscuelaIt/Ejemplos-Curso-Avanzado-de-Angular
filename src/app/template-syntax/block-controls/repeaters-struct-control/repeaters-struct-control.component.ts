import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repeaters-struct-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repeaters-struct-control.component.html',
  styles: `pre {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }

  code {
      font-family: 'Courier New', Courier, monospace;
  }`,
})
export class RepeatersStructControlComponent {

  items: Book[] = [
    { id: 0, title: 'Matar un ruiseñor', author: 'Harper Lee', year: 1960 },
    { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
    {
      id: 2,
      title: 'El gran Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
    },
    { id: 3, title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
    { id: 4, title: 'Un mundo feliz', author: 'Aldous Huxley', year: 1932 },
  ];

  bookTrackBy(index: number, book: Book) {
    return book.id;
  }

  clearList() {
    this.items = [];
  }

  exampleForCodeSimple = `
    @for (
      item of items; 
      track item.id;
    ) { 
      <li>
        <b>Titulo:</b> {{ item.title }} <b>Autor</b>: {{ item.author }}
      </li>
    } @empty {
      <li> No hay elementos. </li>
    }
  `;

  exampleForCodeComplex = `
    @for (
      item of items; 
      track item.id;
      let total=$count; 
      let idx=$index;
      let firstElement=$first;
      let lastElement=$last;
      let isEven=$even;
      let isOdd=$odd;
    ) { 
      <li>
      @if (isEven) {
        Es Indice Par
      } 
      @if (isOdd) {
        Es Indice Impar
      }
      {{ idx }} de {{ total }}:
      @if (firstElement) {
        <b>Primero en la lista</b>
      } @else if (idx === 1) {
        <b>Siguiente en la lista</b>
      } @else if (lastElement) {
        <b>Ultimo en la lista</b>
      } @else {
        <b>Resto</b>
      }
      ---  <b>Titulo:</b> {{ item.title }} <b>Autor</b>: {{ item.author }}
      </li>
    } @empty {
      <li> No hay elementos. </li>
    }
  `;

  exampleNgForCode = `
    <li *ngIf="items.length==0">No hay elementos.</li>
    <li *ngFor="let item of items; trackBy: bookTrackBy; let i = index; let isEven = even; let isOdd = odd; let isFirst = first;">
      {{ i }}: {{ item.title }}
      <span *ngIf="isFirst"> - Primer elemento</span>
      <span *ngIf="isEven"> - Índice par</span>
      <span *ngIf="isOdd"> - Índice impar</span>
    </li>
  `;
}

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}
