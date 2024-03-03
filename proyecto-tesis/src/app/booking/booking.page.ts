import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  bookingForm: FormGroup;
  myDate: String = new Date().toISOString();

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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  selectArea(area: string) {
    let areaControl = this.bookingForm.get('area');
    if (areaControl) {
      areaControl.setValue(area);
    } else {
      console.log('Control no encontrado');
    }
  }

  dateChanged(event: CustomEvent) {
    console.log('Fecha seleccionada:', event.detail.value);
  }

  selectDate() {}
  get maxDate() {
    const now = Date.now();
    return new Date(now + 2 * 30 * 24 * 60 * 60 * 1000);
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
