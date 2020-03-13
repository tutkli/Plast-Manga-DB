import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ResponseTypes = 'text' | 'json';

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  responseType?: ResponseTypes;
}

export interface Pairs {
  [key: string]: string;
}

export interface RequestOptionsArgs {
  headers?: Pairs;
  params?: Pairs;
  responseType?: ResponseTypes;
}

const API_BASE = 'https://api.jikan.moe/v3/';

@Injectable({
  providedIn: 'root',
})
export class GenericHttpService {

  constructor(private httpClient: HttpClient) {
  }

  serverRequest(method: string, endpoint: string, options: RequestOptionsArgs = {}): Observable<any> {
    return this.httpClient.request(method, API_BASE + endpoint, this.toHttpOptions(options));
  }

  toHttpOptions(options: RequestOptionsArgs): HttpOptions {
    return {
      headers: this.toHttpHeaders(options.headers),
      params: this.toHttpParams(options.params),
      responseType: options.responseType ? options.responseType : 'json',
    };
  }

  private toHttpParams(pairs: Pairs): HttpParams {
    return this.toTruthyPairs(pairs).reduce((params: HttpParams, key: string) => params.set(key, pairs[key]), new HttpParams());
  }

  private toHttpHeaders(pairs: Pairs): HttpHeaders {
    return this.toTruthyPairs(pairs).reduce((params: HttpHeaders, key: string) => params.set(key, pairs[key]), new HttpHeaders());
  }

  private toTruthyPairs(pairs: Pairs): string[] {
    if (!pairs) {
      return [];
    }
    return Object.getOwnPropertyNames(pairs)
      .filter((key: string) => {
          const v = pairs[key];
          return v !== null && v !== undefined;
        },
      );
  }

}
