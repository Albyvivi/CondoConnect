import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackFormComponent {
  feedback: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.feedback = this.formBuilder.group({
      feedbackType: ['', Validators.required],
      subject: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  submitFeedback() {
    console.log(this.feedback.value);
  }
}
