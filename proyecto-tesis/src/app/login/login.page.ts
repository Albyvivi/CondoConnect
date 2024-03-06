import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    email: '',
    password: '',
  };

  type: boolean = true;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  changeType() {
    this.type = !this.type;
  }

  goToHome() {
    this.navCtrl.navigateForward('/home');
    console.log(this.login);
  }

  async goToForget() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: 'Se enviará una contraseña temporal a tu teléfono.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  goToSignUp() {
    this.navCtrl.navigateForward('/signup');
  }
}
