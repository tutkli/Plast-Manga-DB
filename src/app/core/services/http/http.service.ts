import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ResponseTypes = 'text' | 'json';

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  responseType?: ResponseTypes;
}

const API_BASE = 'https://api.jikan.moe/v3';

@Injectable({
  providedIn: 'root',
})
export class GenericHttpService {

  constructor(private httpClient: HttpClient) {
  }

  serverRequest(method: string, endpoint: string, options?: HttpOptions): Observable<any> {
    this.configureOptions(options);
    return this.httpClient.request(method, API_BASE + endpoint, options);
  }

  configureOptions(options: HttpOptions) {
    options = {};
    options.headers = new HttpHeaders();
    options.params = new HttpParams();
    options.responseType = 'json';
  }

}
