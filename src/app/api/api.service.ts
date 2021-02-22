import { Injectable } from "@angular/core";
import { AdminApiService } from "./admin/admin.service";

@Injectable()
export class ApiService {
  constructor(public admin: AdminApiService){}
}
