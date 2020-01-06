import { Http, Response } from "@angular/http";
import { Injectable, Injector } from "@angular/core";
import 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../../core/http/core/api.service";

@Injectable()
export class StatesService extends ApiService<any, any, any> {
 
   urlPath: string = 'states';

   constructor(private http: HttpClient, Injector: Injector) {
       super(http, Injector);
   }
}

