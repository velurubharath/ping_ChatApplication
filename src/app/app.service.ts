import { Injectable } from '@angular/core';
import { Cookie} from 'ng2-cookies/ng2-cookies';
import { Observable} from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse, HttpParams} from '@angular/common/http';
import { JsonPipe } from '@angular/common';




@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://chatapi.edwisor.com';

  constructor(public http: HttpClient) { }

  public getUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userInfor'));
  }

  public setUserInforInLocalStorage = (data) => {
    localStorage.setItem('userInfo',JSON.stringify(data));
  }

  public signUpFunction(data): Observable<any>{

    const params = new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('mobile',data.mobile)
    .set('email',data.email)
    .set('password',data.password)
    .set('apiKey',data.apiKey)

    return this.http.post('${this.url}/api/v1/users/signup',params);
  }  // end of signup function

  public signinFunction(data): Observable<any>{

    const params = new HttpParams()
    .set('email',data.email)
    .set('password',data.password)

    return this.http.post('${this.url}/api/v1/users/login',params);
  } // end of signinFuncion
}
