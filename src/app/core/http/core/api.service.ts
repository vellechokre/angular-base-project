import { InjectionToken, Injector } from "@angular/core";
import { BaseService } from "./base.service";
import { HttpClient } from "@angular/common/http";
import { IQueryParams } from "./rest-interfaces";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs";

export const BASE_URL = new InjectionToken<string>('BASE_URL');

export abstract class ApiService<TGet, TPost, TFilter> extends BaseService<TGet, TPost, TFilter> {

    static SUCCESS_STATUS = 'success';
    static FAIL_STATUS = 'fail';

    /**
     * Abstract variable which would be given a value in the derived class.
     *
     * @abstract
     * @type {string}
     * @memberOf ApiService
     */
    abstract urlPath: string;

    /**
     * Base url
     *
     * @type {string}
     * @memberOf ApiService
     */
    public baseUrl: string = '';

    /**
     * Creates an instance of ApiService.
     *
     * @param {Http} http
     * @param {Injector} injector
     *
     * @memberOf ApiService
     */
    constructor(public httpClient: HttpClient, public injector: Injector) {
        super(httpClient);
        this.urlPath = this.getUrl();
        // this.addInterceptor();
    }

    /**
     * Gets the url on which http request has to be made
     *
     * @returns {string}
     *
     * @memberOf ApiService
     */
    getUrl(): string {
        this.baseUrl = this.injector.get(BASE_URL);
        return this.baseUrl + this.urlPath;
    }

    /**
     * Executes http GET method and returns an observable which returns the collection of data on subscription.
     *
     * @param {IQueryParams} [queryParams]
     * @param {BaseServiceGetOpt} [options]
     * @returns
     *
     * @memberOf ApiService
     */
    get(queryParams?: IQueryParams, subpath?: string): Observable<any> {

        return Observable.create((observer: Observer<TGet>) => {
            this._get(queryParams, subpath).subscribe((response: any) => {
                //const finalResult: any = this.handleFullResponse(response, this.dataModel.ListGet || this.dataModel.Get, options);
                observer.next(response);
            }, (err) => {
                observer.error(err);
            }, () => {
                observer.complete();
            })
        })

    }

    /**
     * Executes http POST method and returns an observable which returns the response on subscription.
     *
     * @param {*} item
     * @param {IQueryParams} [queryParams]
     * @returns
     *
     * @memberOf ApiService
     */
    create(item: any, queryParams?: IQueryParams, subpath?: string) {
        return Observable.create((observer: Observer<any>) => {
            this._post(item, queryParams, subpath).subscribe((response: any) => {
                observer.next(response)
            }, (err) => {
                observer.error(err);
            }, () => {
                observer.complete();
            })
        })
    }
}

