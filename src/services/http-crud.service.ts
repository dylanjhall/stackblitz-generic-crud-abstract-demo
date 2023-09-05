import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { CrudOperators } from 'src/interfaces/crud-operators';

export abstract class HttpCrudService<T, K> implements CrudOperators<T, K> {
  protected abstract baseUrl: string;
  private httpOptions: {} = {};
  protected http: HttpClient = inject(HttpClient);
  constructor() {}

  create(item: T, options: {}): Observable<T> {
    return this.http
      .post<T>(this.baseUrl, item, options)
      .pipe(shareReplay(1), catchError(this.handleError));
  }

  read(key: K, options: any): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}/${key}`, {})
      .pipe(shareReplay(1), catchError(this.handleError));
  }

  update(key: K, item: T, options?: any): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}/${key}`, item, {})
      .pipe(shareReplay(1), catchError(this.handleError));
  }

  delete(key: K, options?: any): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${key}`, {})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }
}
