import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestsService } from '../../services/requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class YapayService {

  constructor(
    public requestService: RequestsService,
    private http: HttpClient
  ) { }

  private getHead(){
    const authBasic = btoa( environment.userYaPay + ':' + environment.passwordYaPay );
    const headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Expose-Headers', 'Content-Length, X-JSON')
    .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS')
    .set('Access-Control-Allow-Headers', '*')
    .set('Accept', 'application/json, text/plain, */*')
    .set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Authorization', 'Basic ' + authBasic)
    return headers;
  }

  private getHeaders(){
    const authBasic = btoa( environment.userYaPay + ':' + environment.passwordYaPay );
    const headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','POST, PUT, GET, OPTIONS')
    .set('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Credentials','true')
    .set('Authorization', 'Basic ' + authBasic)
    return headers;
  }//--data-binary

  /*
  //retorna um observable
  public getConsultTransaction(_transaction: string = ""){
    let url = environment.endpointYaPay +"/"+ environment.storeCode +"/"+ _transaction;
    let headers = this.getHeaders();
    let transaction = from(this.http.get(url,{headers: headers}));
    console.log(transaction);
  }
  */
 /*
  //retorna um observable
  public getConsultTransaction(_transaction: string = ""): Observable<any>{
    let url = environment.endpointYaPay +"/"+ environment.storeCode +"/"+ _transaction;
    let headers = this.getHead();
    console.log(headers);
    return this.http.get(url,{headers: headers}).pipe(map(result => result));
  }*/
  //retorna um observable
  public getConsultTransaction(_transaction: string = ""): Observable<any>{
    let url = environment.endpointYaPay +"/"+ environment.storeCode +"/"+ _transaction;
    let headers = this.getHeaders();
    console.log(headers);
    return this.http.get(url,{headers: headers}).pipe(map(result => result));
  }
 /*
    //retorna um observable
    public getConsultTransaction(_transaction: string = ""): Observable<any>{
      let url = environment.endpointYaPay +"/"+ environment.storeCode +"/"+ _transaction;
      let headers = this.getHeaders();
      console.log(headers);
      return this.requestService.getTransaction().pipe(map(result => result));
    }
*/
}