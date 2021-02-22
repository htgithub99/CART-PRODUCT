import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrl } from './api-url.service';
import { ApiService } from './api.service';
import { AdminApiModule } from './admin/admin.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminApiModule
  ],
  providers: [ApiUrl, ApiService]
})
export class ApiModule { }
