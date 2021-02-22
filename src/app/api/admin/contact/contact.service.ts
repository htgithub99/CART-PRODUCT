import { Injectable } from '@angular/core';
// import { catchError, map } from 'rxjs/operators';
import { BaseService } from '../../base.service';
// import { Observable } from 'rxjs';
// import Contact from '../../../models/Contact';


@Injectable()
export class ContactService extends BaseService {
  public url = '/api/admin/contacts';
}
