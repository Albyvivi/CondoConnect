import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

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
