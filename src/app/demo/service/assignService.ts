import { Injectable, Injector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AssignSucces } from '../domain/assignSuccess';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../core/http/core/api.service';

@Injectable()
export class AssignService extends ApiService<any, any, any> {
    urlPath: string = 'employees';

   constructor(private http: HttpClient, Injector: Injector) {
       super(http, Injector);
   }
    // saveAssignDetails(param) {
    //     return this.http.post(`${this.Url}employees/history`, param)
    //         .toPromise()
    // }
    // fetchEmployeeHistory(param) {
    //     return this.http.get(`${this.Url}employees/history/` + param)
    //         .toPromise()
    // }
    // getEmployeeData(param) {
    //     return this.http.get(`${this.Url}employees/` + param)
    //         .toPromise()
    // }
    // sendOtp(param) {
    //     return this.http.get(`${this.Url}generateOtp?empId=` + param.empId + '&phoneNo=' + param.phoneNo + '&name=' + param.name)
    //         .toPromise()
    // }
    // validOtp(param) {
    //     return this.http.get(`${this.Url}validateOtp/?empId=` + param.empId + '&otpnum=' + param.otpnum)
    //         .toPromise()
    // }
}