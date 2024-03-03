import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage {
  bookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bookingForm = this.formBuilder.group({
      area: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      desc: [''],
    });
  }
  selectArea(area: string) {
    console.log(area);
    /*let areaControl = this.bookingForm.get('area');
    if (areaControl) {
      areaControl.setValue(area);
    } else {
      console.log('Control no encontrado');
    }*/
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
