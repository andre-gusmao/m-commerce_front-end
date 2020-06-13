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

  getHeaders() {
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    return headers;
  }

  postRequest<Observable>(data: any, endpoint: string) {
    let url = environment.endpointURL + endpoint;

    data = JSON.stringify(data);

    return this.http.post(url, data, {headers: this.getHeaders()})
      .pipe(map((response: Response) => response));

    /*
    return this.http.post(url, JSON.stringify(data), { headers: this.getHeaders() }).pipe(
      map(res => {
        return res;
      })
    ).subscribe(value => {
      console.log(value);
    });
    */

  }

  getUserService() {
    let url = "";
    /*return this.http.get(url + '/user', {headers: this.getHeaders()})
      .map((response: Response) => response.json(),
      error => error.json('erreur dans lurl'));*/
  }

  getRequest(data: any, endpoint: string) {
    let url = environment.endpointURL + endpoint;

    return this.http.get(url, { headers: this.getHeaders() }).pipe(map(res => res));
  }

  getRequestById(endpoint: string, paramID: string) {
    let url = environment.endpointURL + endpoint + '?id=' + paramID;

    return this.http.get(url, { headers: this.getHeaders() }).pipe(map(res => res));
  }

  putRequest(data: any, endpoint: string) {
    let url = environment.endpointURL + endpoint;

    return this.http.put(url, JSON.stringify(data), { headers: this.getHeaders() }).pipe(map(res => res));
  }

  deleteRequest(endpoint: string, paramID: string) {
    let url = environment.endpointURL + endpoint;

    return this.http.delete(url, { headers: this.getHeaders() }).pipe(map(res => res));
  }
}
