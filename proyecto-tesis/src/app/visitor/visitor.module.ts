import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VisitorPageRoutingModule } from './visitor-routing.module';

import { VisitorPage } from './visitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [VisitorPage],
})
export class VisitorPageModule {}
