import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    constructor(private http: Http) {

    }
    createUser(data: any) {
        console.log(data);
    }

    getCourses() {
        this
            .http
            .get('https://abt-azurewebsites.net/api/courses')
            .map((res: Response) => res.json());
    }
}
