import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../../http/core/api.service';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppointmentService extends ApiService<any, any, any> {

    urlPath: string = 'appointment';

    constructor(private http: HttpClient, Injector: Injector) {
        super(http, Injector);
    }

}