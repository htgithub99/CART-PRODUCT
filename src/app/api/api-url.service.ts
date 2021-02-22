import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiUrl {
  private api_url = environment.defaultApiUrl;
  getApiUrl(url: string) {
    if (url.substring(0, 1) === '/') {
      return `${this.api_url}${url}`;
    } else {
      return `${this.api_url}/${url}`;
    }
  }
}
