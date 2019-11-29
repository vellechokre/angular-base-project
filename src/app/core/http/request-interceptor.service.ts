import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(
            req.clone({
                headers: new HttpHeaders({
                    'x_branch_id':  '1',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  })
            })
        );
    }
}