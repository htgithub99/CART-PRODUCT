import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminApiService } from './admin.service';
import { ContactService } from './contact/contact.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AdminApiService,
    ContactService
  ]
})
export class AdminApiModule {
  constructor() {}
}
