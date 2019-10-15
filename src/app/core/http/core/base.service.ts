import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { IQueryParams } from "./rest-interfaces";
import { HttpEvent } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";


@Injectable()
export abstract class BaseService<TGet, TPost, TFilter>{

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * Gets the url on which request has to be sent to the server.
     * The implementation of this method is done in its derived class.
     *
     * @abstract
     * @returns {string}
     *
     * @memberOf BaseService
     */
    abstract getUrl(): string;

    /**
     * Takes a key value object and creates an HttpParams object
     *
     * @param {Object} paramObject
     * @returns {HttpParams}
     * @memberof BaseService
     */
    buildHttpParams(paramObject: Object): HttpParams {
        paramObject = this.buildQueryParams(paramObject);
        let params: HttpParams = new HttpParams();
        for (let key in paramObject) {
            if (paramObject.hasOwnProperty(key) && paramObject[key]) {
                params = params.set(key, paramObject[key].toString());
            }
        }
        return params;
    }

    /**
     * Prepares request options and calls http request method to GET a collection of data
     *
     * @param {IQueryParams} [queryParams]
     * @returns
     *
     * @memberOf BaseService
     */
    _get(queryParams?: IQueryParams, subpath?: string): Observable<Response | HttpEvent<Response>> {
        subpath = subpath || '';
        const url = this.getUrl() + subpath;
        const options = this.getHttpOptions(queryParams);
        return this.httpClient.get<Response>(url, options);
    }

    /**
     * Prepares request options and calls http request method to GET one entity
     * @param {number} id
     * @param {IQueryParams} [queryParams]
     * @returns
     *
     * @memberOf BaseService
     */
    _getById(id: number, queryParams?: IQueryParams) {
        const url = this.getUrl() + '/' + id;
        const options = this.getHttpOptions(queryParams);
        return this.httpClient.get<Response>(url, options);
    }

    /**
     * Prepares request options and calls http request method to UPDATE the data for an entity
     *
     * @param {TPost} postModel
     * @param {IQueryParams} queryParams
     * @returns
     *
     * @memberOf BaseService
     */
    _put(postModel: TPost, queryParams?: IQueryParams) {
        const url = this.getUrl();
        const options = this.getHttpOptions(queryParams);
        return this.httpClient.put(url, postModel, options);
    }

    /**
     * Prepares request options and calls http request method to POST the data
     *
     * @param {TPost} postModel
     * @param {IQueryParams} [queryParams]
     * @returns
     * @memberOf BaseService
     */
    _post(postModel: TPost, queryParams?: IQueryParams) {
        const url = this.getUrl();
        const options = this.getHttpOptions(queryParams);
        return this.httpClient.post(url, postModel, options);
    }



    /**
     *
     * @param {TPost} postModel
     * @param {IQueryParams} [queryParams]
     * @returns
     * @memberof BaseService
     */
    _patch(postModel: TPost, queryParams?: IQueryParams) {
        const url = this.getUrl();
        const options = this.getHttpOptions(queryParams);
        return this.httpClient.patch(url, postModel, options);
    }


    /**
     * Makes a delete request.
     *
     * @param {IQueryParams} [queryParams]
     * @returns
     * @memberof BaseServiceOld
     */
    _delete(id: number, queryParams?: IQueryParams) {
        const url = this.getUrl() + '/' + id;
        const options = this.getHttpOptions(queryParams);
        return this.httpClient.delete(url, options);
    }

    /**
     * Returns query params object by appending default query params with query params passed by function
     *
     * @param {any} queryParams
     * @returns
     * @memberof BaseService
     */
    buildQueryParams(queryParams) {
        return queryParams = Object.assign({}, this.getDefaultQueryParams(), queryParams);
    }

    getDefaultQueryParams() {
        return {};
    }

    getDefaultHeaders() {
        return new HttpHeaders();
    }

    getHttpOptions(queryParams) {
        return {
            params: this.buildHttpParams(queryParams),
            headers: this.getDefaultHeaders()
        }
    }
}

