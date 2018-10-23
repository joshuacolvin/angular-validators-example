import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  phoneRequired = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      phone: ['', Validators.maxLength(10)]
    });
  }

  submitForm(value: any) {
    // handle submit
  }
}
