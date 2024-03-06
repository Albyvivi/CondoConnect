import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/helpers/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingPageModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback.module').then((m) => m.FeedbackPageModule),
  },
  {
    path: 'visitor',
    loadChildren: () =>
      import('./visitor/visitor.module').then((m) => m.VisitorPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
