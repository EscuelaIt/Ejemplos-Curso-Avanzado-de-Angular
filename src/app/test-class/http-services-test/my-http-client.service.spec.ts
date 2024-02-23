import { TestBed } from '@angular/core/testing';
import { MyHttpClientService } from './my-http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MyBook } from './my-book';

fdescribe('MyHttpClientService', () => {
  let service: MyHttpClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [provideHttpClientTesting()]
    });
    service = TestBed.inject(MyHttpClientService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(()=> {
    TestBed.inject(HttpTestingController).verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of books', ()=> {
    const bookList: MyBook[] = [
      { id: 1, title: 'Titulo' }
    ];

    service.getBooks().subscribe((books) => {
      expect(books).toEqual(bookList)
    })

    const req = httpMock.expectOne('http:localhost/books')
    expect(req.request.method).withContext('should call Get method').toBe('GET')
    req.flush(bookList)
    
  })
});

