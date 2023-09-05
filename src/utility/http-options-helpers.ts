import { HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpOptions } from "src/interfaces/http-options";

export function toPlainObject(options: HttpOptions): {} {
  const plainOptions: any = { ...options };

  if (options.headers && options.headers instanceof HttpHeaders) {
     const httpHeaders: HttpHeaders = options.headers;
      plainOptions.headers = {};
      options.headers.keys().forEach(key => {
          const headerValue = (typeof options.headers === 'string')? options.headers :httpHeaders.getAll(key)
          
          if (headerValue) {
              plainOptions.headers[key] = headerValue;
          }
      });
  }

  if (options.params && options.params instanceof HttpParams) {
     const httpParams: HttpParams = options.params;
      plainOptions.params = {};
      options.params.keys().forEach(key => {
          const paramValue = httpParams.getAll(key);
          if (paramValue) {
              plainOptions.params[key] = paramValue;
          }
      });
  }

  return plainOptions;
}
