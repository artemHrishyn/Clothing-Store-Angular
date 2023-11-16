import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LoginFormModule } from '../login-form/login-form.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    LoginFormModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
