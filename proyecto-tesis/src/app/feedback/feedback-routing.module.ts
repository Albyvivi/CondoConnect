import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackFormComponent } from './feedback.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackPageRoutingModule {}
