import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [ DataService ]
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
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

  submit() {
    this.dataService.createUser(this.form.value);
  }

}
