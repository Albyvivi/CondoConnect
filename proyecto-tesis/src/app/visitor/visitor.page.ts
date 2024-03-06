import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.page.html',
  styleUrls: ['./visitor.page.scss'],
})
export class VisitorPage implements OnInit {
  visitorForm: FormGroup;
  myDate: String = new Date().toISOString();

  timeValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: any } | null => {
    const startTime = (control as FormGroup).get('startTime');
    const endTime = (control as FormGroup).get('endTime');

    return startTime && endTime && startTime.value < endTime.value
      ? null
      : { timeInvalid: true };
  };

  constructor(private fb: FormBuilder) {
    this.visitorForm = this.fb.group(
      {
        visitorType: [''],
        date: [''],
        time: [''],
        parkingSlot: [''],
        desc: [''],
        startTime: [''],
        endTime: [''],
      },
      { validators: this.timeValidator }
    );
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.visitorForm.value);
  }
  selectVisitor(visitorType: string) {
    let visitorTypeControl = this.visitorForm.get('visitorType');
    if (visitorTypeControl) {
      visitorTypeControl.setValue(visitorType);
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
}
