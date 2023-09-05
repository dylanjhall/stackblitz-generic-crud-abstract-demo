import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface CrudOperators<T, K> {
  create(item: any, options: any): Observable<T>;
  read(key: K, options: any): Observable<T>;
  update(key: K, item: T, options: any): Observable<T>;
  delete(key: K, options: any): Observable<void>;
}
