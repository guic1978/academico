import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../../services/aluno.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aluno-list-page',
  templateUrl: './list-page.component.html',
  providers: [AlunoService]
})
export class AlunoListPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private alunoService: AlunoService, private fb: FormBuilder) {
    this.form = this.fb.group({
    });
  }

  ngOnInit() {
  }

  getAlunos() {
    this.alunoService.getAlunos().subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
