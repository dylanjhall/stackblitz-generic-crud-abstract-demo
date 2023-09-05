import { HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { HttpOptions } from "./http-options";


export interface CrudOperators<T, K, O > {
  create(item: any, options?: {}): Observable<T>;
  read(key: K, options?: O): Observable<T>;
  update(key: K, item: T, options?: O): Observable<T>;
  delete(key: K, options?: O): Observable<void>;
}
