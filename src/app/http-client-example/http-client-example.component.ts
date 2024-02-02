import { Component, OnInit, Signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClienExampletService } from './http-client-example.service';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>http-client-example works!</h1>
    <div>
      <button (click)="doRequest()">Hacer peticion</button>
    </div>
    <hr />
    <h1>Manejar error con objeto Observer</h1>
    <div>
      <button (click)="doRequestWithErrorWithObserverObject()">
        Hacer peticion
      </button>
    </div>
    <h1>Manejar error con operador catchError</h1>
    <div>
      <button (click)="doRequestWithErrorWithCatchErrorOperator()">
        Hacer peticion
      </button>
    </div>
    <h1>Obtener datos automaticamente con el observable del httpClient</h1>
    <div>
      @for (book of bookList1 | async; track book.id) {
        <li>{{ book.title }}</li>
      } @empty {
        <p>There are no items.</p>
      }
    </div>
    <h1>Obtener datos  automaticamente con signal</h1>
    <div>
      @for (book of bookList(); track book.id) {
        <li>{{ book.title }}</li>
      } @empty {
        <p>There are no items.</p>
      }
    </div>
    @if (withError()) {
      <h1>Hay un error</h1>
    }
    
  `,
  styles: ``,
})
export class HttpClientExampleComponent implements OnInit {

  public bookList1: Observable<Book[]> = of([]);
  private service = inject(HttpClienExampletService);
  bookList: Signal<Book[]> = computed(() =>  this.service.data() );
  withError: Signal<boolean> = computed(() =>  this.service.error() );

  ngOnInit(): void {
      this.bookList1 = this.getData();
      this.getDataV2();
  }

  doRequestWithErrorWithCatchErrorOperator() {
    this.service.doRequestWithErrorWithCatchErrorOperator();
  }
  doRequestWithErrorWithObserverObject() {
    this.service.doRequestWithErrorWithObserverObject();
  }
  
  doRequest(): void {
    this.service.doRequest();
  }

  getData(): Observable<Book[]> {
    return this.service.getData();
  }

  getDataV2(): void {
    this.service.getDataV2();
  }
}
