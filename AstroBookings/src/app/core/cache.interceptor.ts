import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

const cache = new Map<string, HttpResponse<any>>();

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET') return next(req);

  const cachedResponse: HttpResponse<any> | undefined = cache.get(req.url);
  if (cachedResponse) return of(cachedResponse);

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        const response = event;
        cache.set(req.url, response);
      }
    })
  );
};
