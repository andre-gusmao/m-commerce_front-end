import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  getKWToken() {
    let kw: string = "";
    let now = new Date();
    let year = now.getFullYear().toString();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let hour = now.getHours();
    let key = year.toString() + month.toString() + day.toString() + "kw" + hour.toString()

    kw = '?token=' + btoa(key);

    return kw;
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Expose-Headers', 'Content-Length, X-JSON')
      .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS')
      .set('Access-Control-Allow-Headers', '*')
      .set('Accept', '*/*')
      .set('Content-Type', 'application/json');
    return headers;
  }

  postRequest(data: any, endpoint: string): Observable<any> {
    let url = environment.endpointURL + endpoint + this.getKWToken();
    let headers = this.getHeaders();
    data = JSON.stringify(data);
    return this.http.post<any>(url, data, {headers});
  }

  getRequest(endpoint: string, paramName: string, paramValue: string): Observable<any>   {
    let url = environment.endpointURL + endpoint + this.getKWToken();
    return this.http.get<any>(url, { headers: this.getHeaders() }).pipe(map(res => res));
  }

  getRequestById(endpoint: string, paramName: string, paramValue: string): Observable<any>   {
    let url = environment.endpointURL + endpoint + this.getKWToken() + '&' + paramName + '=' + paramValue;
    return this.http.get<any>(url, { headers: this.getHeaders() }).pipe(map(res => res));
  }

  putRequest(data: any, endpoint: string) {
    let url = environment.endpointURL + endpoint + this.getKWToken();
    data = JSON.stringify(data);
    return this.http.put(url, data, { headers: this.getHeaders() }).pipe(map(res => res));
  }

  deleteRequest(endpoint: string, paramName: string, paramValue: string) {
    //let url = environment.endpointURL + endpoint + '?' + paramName + '=' + paramValue;
    let url = environment.endpointURL + endpoint + '/' + paramValue + this.getKWToken();
    return this.http.delete(url, { headers: this.getHeaders() }).pipe(map(res => res));
  }
}
