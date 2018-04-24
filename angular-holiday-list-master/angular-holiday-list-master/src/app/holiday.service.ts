import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class holidayService {
    private apiKey = 'be48f650-926a-432e-9a26-3679f34102e8';
    private domainUrl = 'https://holidayapi.com/v1/holidays?key=' + this.apiKey + '&country=US&year=2015';  // URL to web API
    constructor(private http: HttpClient) { }
    /*Getting the holiday list*/
    getholidayList() {
        return this.http.get(this.domainUrl)
            .map(res => {
                return res;
            }).catch(res => {
                return Observable.throw(res.json());
            });
    }

  }