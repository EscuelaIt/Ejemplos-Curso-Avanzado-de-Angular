import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Book } from './book';
import { Observable, Observer, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClienExampletService {
  
  private httpClient = inject(HttpClient)
  data = signal<Book[]>([])
  error = signal<boolean>(false)

  doRequest() {
    this.httpClient.get('http://localhost:3000/libros').subscribe(res => console.log(res));
    //this.httpClient.get('https://rickandmortyapi.com/api/character').subscribe(res => console.log(res));
    // fetch('http://localhost:3000/libros');
  }

  doRequestWithErrorWithObserverObject() {
    const myObserver: Observer<Book[]> = {
      next: (data) => {
        // procesar datos
        console.log(data);
      },
      error: (err) => {
        // gestionar un error
        console.log(err)
      },
      complete: () => {
        // hacer algo al completarse la emision de datos
        console.log('Complete');
      }
    } 
    
    
    const myRequest = this.httpClient.get<Book[]>('http://localhost:3000/libros');
    myRequest.subscribe(myObserver);
  }

  doRequestWithErrorWithCatchErrorOperator() {
    const myRequest = this.httpClient.get<Book[]>('http://localhost:3000/libros');
    myRequest.pipe(catchError((err) => {
      console.log(err);
      return of(null)
    })).subscribe(res => {
      if (res) {
        console.log('datos recibidos ejemplo 3: ');
        console.log(res);
      } else {
        console.log('Es un error');
      }
    });
  }

  getData(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:3000/libros');
  }

  requestData(): void {
    this.httpClient.get<Book[]>('http://localhost:3000/libros');
  }

  getDataV2(): void {
    this.httpClient.get<Book[]>('http://localhost:3000/libros').pipe(catchError((err) => {
      console.log(err);
      return of(null)
    })).subscribe(res => {
      if (res !== null) {
        this.data.set(res)
      } else {
        this.error.set(true);
        this.data.set([])
      }
    });
  }
}
