import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginComponent, LoginCardComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  providers: [LoginService],
})
export class LoginModule {}
