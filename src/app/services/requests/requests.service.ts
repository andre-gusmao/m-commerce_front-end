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

  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  getKWToken(URLToken: boolean = true) {
    let kw: string = "";
    let now = new Date();
    let year = now.getFullYear().toString();
    let month = now.getMonth()+1;
    let day = now.getDate();
    let hour = now.getHours();
    let key = year.toString() + month.toString() + day.toString() + "kw" + hour.toString()

    if(URLToken == true) {
      kw = '?token=' + btoa(key);
    } else {
      kw = btoa(key);
    }

    return kw;
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Expose-Headers', 'Content-Length, X-JSON')
      .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS')
      .set('Access-Control-Allow-Headers', '*')
      .set('Accept', 'application/json, text/plain, */*')
      .set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
      .set('Content-Type', 'application/json;charset=UTF-8')
      .set('Cache-Control', 'no-cache')
    return headers;
  }

  getHeadersToken() {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Expose-Headers', 'Content-Length, X-JSON')
      .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS')
      .set('Access-Control-Allow-Headers', '*')
      .set('Accept', '*/*')
      .set('Content-Type', 'application/json')
      .set('token', this.getKWToken(false));
    return headers;
  }

  public postRequest(data: any, endpoint: string): Observable<any> {
    //let url = environment.endpointURL + endpoint + this.getKWToken();
    let url = environment.endpointURL + endpoint;
    let headers = this.getHeaders();
    data = JSON.stringify(data);
    return this.http.post(url, data, {headers: headers}).pipe(map(res => res));
  }

  private getRequest(endpoint: string, paramName: string, paramValue: string): Observable<any>   {
    // let url = environment.endpointURL + endpoint + this.getKWToken();
    let url = environment.endpointURL + endpoint;
    let headers = this.getHeaders();
    return this.http.get<any>(url, {}).pipe(map(res => res));
  }

  public getRequestById(endpoint: string, paramName: string, paramValue: string): Observable<any>   {
    // let url = environment.endpointURL + endpoint + this.getKWToken() + '&' + paramName + '=' + paramValue;
    let url = environment.endpointURL + endpoint + '?' + paramName + '=' + paramValue;
    let headers = this.getHeaders();
    return this.http.get(url, {}).pipe(map(res => res));
  }

  putRequest(data: any, endpoint: string): Observable<any> {
    //let url = environment.endpointURL + endpoint + this.getKWToken();
    let url = environment.endpointURL + endpoint;
    let headers = this.getHeaders();
    data = JSON.stringify(data);
    return this.http.put<any>(url, data, {});
  }

  deleteRequest(endpoint: string, paramName: string, paramValue: string) {
    //let url = environment.endpointURL + endpoint + '?' + paramName + '=' + paramValue;
    let url = environment.endpointURL + endpoint + '/' + paramValue;
    let headers = this.getHeaders();
    return this.http.delete<any>(url, {}).pipe(map(res => res));
  }

}
