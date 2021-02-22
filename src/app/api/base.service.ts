import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiUrl } from './api-url.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public url = '';
  public http: HttpClient;
  public apiUrl: ApiUrl;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Inject(ApiUrl) apiUrl: ApiUrl
  ) {
    this.http = http;
    this.apiUrl = apiUrl;
  }

  get(params?: {}): Observable<any> {
    return this.http.get(this.apiUrl.getApiUrl(this.url)).pipe(
      map((result: any) => {
        return _.assign(
          {},
          {
            items: result.data,
          }
        );
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
