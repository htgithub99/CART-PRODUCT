import { Injectable } from '@angular/core';
import { ContactService } from './contact/contact.service';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  constructor(
    public contact: ContactService,
  ) {}
}
