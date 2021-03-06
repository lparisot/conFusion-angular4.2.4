import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, ContactType } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOutTrigger]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  submission: Feedback;
  errMess: string;
  contactType = ContactType;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };
  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  constructor(
    private feedbackService: FeedbackService,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.submission = null;
    this.feedback = null;
    this.errMess = null;

    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
 }

 onValueChanged(data?: any) {
   if (!this.feedbackForm) { return; }
   const form = this.feedbackForm;
   for (const field in this.formErrors) {
     // clear previous error message (if any)
     this.formErrors[field] = '';
     const control = form.get(field);
     if (control && !control.valid) {
       const messages = this.validationMessages[field];
       for (const key in control.errors) {
         this.formErrors[field] += messages[key] + ' ';
       }
     }
   }
 }

 onSubmit() {
   this.feedback = this.feedbackForm.value;

   this.feedbackService.submitFeedback(this.feedback)
    .subscribe(
      feedback => {
        this.submission = feedback;
        setTimeout(() => { this.submission = null; this.feedback = null; }, 5000);
        this.feedbackForm.reset({
           firstname: '',
           lastname: '',
           telnum: '',
           email: '',
           agree: false,
           contacttype: 'None',
           message: ''
         });
      },
      errmess => {
        this.errMess = 'Can\'t send your feedback, you can retry';
        setTimeout(() => {
          this.feedback = null;
          this.submission = null;
          this.errMess = null;
        }, 2000);
      }
    );
 }
}
