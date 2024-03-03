import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule],
  declarations: [LoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule {}
