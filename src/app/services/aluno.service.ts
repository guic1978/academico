import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlunoService {
    constructor(private http: Http) {

    }

    createAluno(data: any) {
        console.log(data);
    }

    getAlunos() {
        return this.http
            .get('http://localhost:5000/api/aluno')
            .map((res: Response) => res.json());
    }
}
