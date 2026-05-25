import { HttpInterceptorFn } from '@angular/common/http';

const LS_ACCESS_TOKEN = 'access_token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (typeof localStorage === 'undefined') {
    return next(req);
  }
  const token = localStorage.getItem(LS_ACCESS_TOKEN);
  if (!token) {
    return next(req);
  }
  return next(
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }),
  );
};
