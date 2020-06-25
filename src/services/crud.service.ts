/* IMPORTS */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { ObservablesService } from '../observable/observable.service';

import { environment } from '../environments/environment';


/* DEFINITION & EXPORT */
@Injectable()
export class CrudService {

    // DEPENDENCIES INJECTION
    constructor(
        private HttpClient: HttpClient,
        // private ObservablesService: ObservablesService
    ) { }

    // METHODS
    // ----- REQUEST SETTINGS -----
    // request headers setting
    private setHeaders = () => {
        const myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json');

        // return header
        return myHeader;
    };

    // ----- SOURCES -----
    // CRUD: get all sources & bookmarks from API
    public getAllSources(): Promise<any> {
        return this.HttpClient.get(`${environment.newsApiUrl}/sources?apiKey=${environment.newsApiKey}`)
            .toPromise()
            .then(data => this.getData('sources', data))
            .catch(this.handleError);
    }

    // ----- NEWS -----
    // CRUD: get top headlines from one source
    public getTopHeadlines(sources: string, keyword?: string): Promise<any> {
        return this.HttpClient.get(`${environment.newsApiUrl}/top-headlines?${sources}&${keyword}&apiKey=${environment.newsApiKey}`)
            .toPromise()
            .then(data => this.getData('top-headlines', data))
            .catch(this.handleError);
    }

    // ----- RESPONSE HANDLING -----
    // get api response
    private getData = (endpoint, apiResponse: any) => {
        // Switch endpoint to set observable value
        switch (endpoint) {
            case 'top-headlines':
                // Set news observable value & local storage
                // this.ObservablesService.setObservableData('news', apiResponse.articles);

                // Return data
                return apiResponse || {};
                break;

            default:
                return apiResponse || {};
                break;
        }
    };

    // handle api response error
    private handleError = (apiError: any) => Promise.reject(apiError.error);

}
