import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable()
export class DataService {

  private url = "/weatherforecast";

  constructor(private http: HttpClient) {  }

  getAll() {
    return this.http.get(this.url);
  }

  getContactsPaginations(params: any): Observable<any> {
    return this.http.get<any>("/public/contactPaginations", { params });
  }
  getCompanysPaginations(params: any): Observable<any> {
    return this.http.get<any>("/public/companyPaginations", { params });
  }


  public getContacts() {
    return this.http.get("/public/contactCount");//?
  }


  //getProduct(id: number) {
  //  return this.http.get(this.url + '/' + id);
  //}

  //createProduct(product: Product) {
  //  return this.http.post(this.url, product);
  //}

  //updateProduct(product: Product) {
  //  return this.http.put(this.url, product);
  //}

  //deleteProduct(id: number) {
  //  return this.http.delete(this.url + '/' + id);
  //}
}
