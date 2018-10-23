import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  invalid = false;
  phoneRequired = false;
  defaultPhoneValidators = [Validators.maxLength(10)];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      phone: ['', this.defaultPhoneValidators]
    });
  }

  submitForm(value: any) {
    if (this.form.invalid) {
      this.invalid = true;
    } else {
      this.invalid = false;
    }
  }

  updateRequiredStatus(event: any) {
    this.phoneRequired = event;

    if (this.phoneRequired) {
      this.form
        .get('phone')
        .setValidators(
          Validators.compose([
            ...this.defaultPhoneValidators,
            Validators.required
          ])
        );
    } else {
      this.form
        .get('phone')
        .setValidators(Validators.compose(this.defaultPhoneValidators));
    }

    this.form.get('phone').updateValueAndValidity();
  }
}
