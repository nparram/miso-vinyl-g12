import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class HttpErrorInterceptor extends HttpErrorResponse {

  constructor(private toastrService: ToastrService) {
    super(toastrService);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errMsg = '';
          let errorType = '';
          // Client Side error
          if(error.error instanceof ErrorEvent){
            errMsg = `Error: ${error.error.message}`;
          } else { // Server side error
            if(error.status === 0){
              errMsg = `${error.status}, "No hay conxion con el servidor"`;
              errorType = 'Major Error';
            } else {
              errMsg = `${error.status}: ${error.error}`;
            }
            this.toastrService.error(errMsg, errorType, {closeButton: true});
          }
          console.log(error.error.message);
          return throwError(error);
        }));
  }

}
