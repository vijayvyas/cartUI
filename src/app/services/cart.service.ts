import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class CartService {

  constructor(private httpClient:HttpClient) { }
  headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  // options = new RequestOptions({ headers: headers });

  get(url:string){
    return this.httpClient.get(url, {
      headers: this.headers,
    });
  }

}
