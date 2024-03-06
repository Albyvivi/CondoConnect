import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

function validateSelection(control: AbstractControl) {
  if (control.value !== 'Propietario' && control.value !== 'Arrendatario') {
    return { invalidSelection: true };
  }
  return null;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private alertController: AlertController,
    private http: HttpClient
  ) {
    this.signupForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cellphone: ['', [Validators.required, Validators.minLength(10)]],
      block: ['', [Validators.required, Validators.min(1), Validators.max(16)]],
      apt: ['', [Validators.required, Validators.min(1), Validators.max(8)]],
      rol: ['', [Validators.required, validateSelection]],
    });
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      this.http
        .post('https://tu-api.com/signup', this.signupForm.value)
        .subscribe(
          async (response) => {
            console.log(response);
            this.navCtrl.navigateForward('/login');
          },
          async (error) => {
            console.log(error);
            const alert = await this.alertController.create({
              header: 'Error',
              message: 'Hubo un error al enviar el formulario.',
              buttons: ['OK'],
            });
            await alert.present();
          }
        );
    } else {
      console.log('Formulario no válido');
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El formulario no fue ingresado correctamente.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
