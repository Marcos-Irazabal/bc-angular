import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerServiceService } from './spinner-service.service';

@Injectable()
export class SpinnerInterceptorInterceptor implements HttpInterceptor {

  constructor(private spinnerSvc:SpinnerServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerSvc.show();
    return next.handle(request).pipe(finalize(() => this.spinnerSvc.hide()));
  }
}
