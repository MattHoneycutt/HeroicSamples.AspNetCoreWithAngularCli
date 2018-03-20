import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class ApiClient {
  constructor(private httpClient: HttpClient) {}

  private getUrl(url: string) {
    const trimmedUrl = url.startsWith('/') ? url.substring(1) : url;
    return `${environment.apiUrl}/${trimmedUrl}`;
  }

  public post<T>(
    url: string,
    body: any | null,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ) {
    return this.httpClient.post<T>(this.getUrl(url), body, options);
  }

  public get<T>(
    url: string,
    options?: {
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      observe: 'events';
      params?: HttpParams | {
          [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
  }) {
    return this.httpClient.get<T>(this.getUrl(url), options);
  }

  public put<T>(
    url: string,
    body: any | null,
    options?: {
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      observe?: 'body';
      params?: HttpParams | {
          [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
  }) {
    return this.httpClient.put<T>(this.getUrl(url), body, options);
  }
}
