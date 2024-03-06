import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {
  feedback: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.feedback = this.formBuilder.group({
      feedbackType: ['', Validators.required],
      subject: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  selectFeedbackType(feedbackType: string) {
    let feedbackTypeControl = this.feedback.get('feedbackType');
    if (feedbackTypeControl) {
      feedbackTypeControl.setValue(feedbackType);
    } else {
      console.log('Control no encontrado');
    }
  }

  submitFeedback() {
    console.log(this.feedback.value);
  }
}
