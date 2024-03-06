import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import { User } from '../core/models/User';
import { AuthData } from '../core/models/AuthData';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  type: boolean = true;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private form: FormBuilder
  ) {
    this.loginForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}
  get f() {
    return this.loginForm.controls;
  }

  goToHome() {
    if (this.loginForm.invalid) {
      return;
    }
    const authData = {
      userName: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.authService.login(authData.userName, authData.password).subscribe(
      (user: AuthData) => {
        if (user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', user.token);
          this.navCtrl.navigateForward('/home');
        } else {
          console.log('no funciona');
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.navCtrl.navigateForward('/home');
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

  changeType() {
    this.type = !this.type;
  }
}
