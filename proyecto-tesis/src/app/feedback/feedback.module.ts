import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedbackPageRoutingModule } from './feedback-routing.module';
import { FeedbackPage } from './feedback.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FeedbackPage],
})
export class FeedbackPageModule {}
