import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        Validators.email
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(8),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

}
