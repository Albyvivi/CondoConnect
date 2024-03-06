import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  navCtrl: any;

  constructor() {}
  goToBookings() {
    this.navCtrl.navigateForward('/booking');
  }
  goToFeedback() {
    this.navCtrl.navigateForward('/feedback');
  }
  goToVisitors() {
    this.navCtrl.navigateForward('/visitor');
  }
}
