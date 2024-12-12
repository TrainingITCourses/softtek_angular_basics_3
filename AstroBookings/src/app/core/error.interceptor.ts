import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        const status = error.status;
        if (status === 401) {
          router.navigate(['/login']);
        }
      }
      console.error('🔥Error', error);
      return throwError(() => new Error('An error occurred'));
    })
  );
};
