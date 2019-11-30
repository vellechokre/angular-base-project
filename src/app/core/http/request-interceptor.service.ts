import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('token')
        const authToken: string = `Bearer ${localStorage.getItem('token')}`
        if(!accessToken){
            return next.handle(
                req.clone({
                    headers: new HttpHeaders({
                        'x_branch_id':  '1'
                      })
                })
            );
        }else{
            const authReq = req.clone({
                headers: req.headers.set('Authorization', authToken)
              });

            const finalRequest = authReq.clone({
                headers: authReq.headers.set('x_branch_id', '1')
            })

        console.log("=============", finalRequest)
        return next.handle(finalRequest);
        }
    }
}