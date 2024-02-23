import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyBook } from './my-book';

@Injectable({
  providedIn: 'root'
})
export class MyHttpClientService {
  private httpClient = inject(HttpClient)
  
  getBooks(): Observable<MyBook[]> {
    return this.httpClient.get<MyBook[]>('http:localhost/books')
  }
}
