import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export function logginInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log('la url vista en el interceptor es:'+req.url);
  return next(req);
}

export function loggingInterceptorReturnedData(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log(req.url, 'returned a response with status', event.status);
      }
    })
  );
}

export function interceptorWithResponseMutated(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const modifiedRequest = req.clone({
    headers: req.headers.set('Authorization', 'Bearer YourAccessToken')
    // Puedes realizar otras modificaciones según tus necesidades
  });

  // Pasar la solicitud modificada al siguiente manejador
  return next(modifiedRequest);
}