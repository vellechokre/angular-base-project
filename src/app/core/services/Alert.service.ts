import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Alert, AlertType } from '../modals/alert';
import { Router, NavigationStart  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlertService {

    private subject = new Subject<Alert>();
    private keepAfterRouteChange = true;

    constructor( private router: Router ) { 
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, summary: string, keepAfterRouteChange = true) {
        this.alert(AlertType.Success, message, summary, keepAfterRouteChange);
    }

    error(message: string, summary: string, keepAfterRouteChange = true) {
        this.alert(AlertType.Error, message, summary, keepAfterRouteChange);
    }

    info(message: string, summary: string, keepAfterRouteChange = true) {
        this.alert(AlertType.Info, message, summary, keepAfterRouteChange);
    }

    warn(message: string, summary: string, keepAfterRouteChange = true) {
        this.alert(AlertType.Warning, message, summary, keepAfterRouteChange);
    }

    alert(type: AlertType, message: string, summary: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<Alert>{ severity: type, summary: summary, detail: message });
    }

    clear() {
        // clear alerts
        this.subject.next();
    }

}