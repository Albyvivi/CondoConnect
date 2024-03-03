import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.page.html',
  styleUrls: ['./visitor.page.scss'],
})
export class VisitorPage implements OnInit {
  visitorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.visitorForm = this.fb.group({
      visitorType: [''],
      date: [''],
      time: [''],
      parkingSlot: [''],
      desc: [''],
    });
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
}
