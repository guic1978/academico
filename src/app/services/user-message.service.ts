import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserMessageService {
    public messages: any[] = [];
    messageChange: Observable<any>;
    messageChangeObserver: Observer<any>;

    constructor() {
        this.messageChange = new Observable((observer: Observer<any>) => {
            this.messageChangeObserver = observer;
        });
    }

    addItem(message) {
        this.messages.push(message);
        this.messageChangeObserver.next(this.messages);
    }
}

