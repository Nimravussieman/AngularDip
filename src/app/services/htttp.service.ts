import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class DataService {

  private url = "/weatherforecast";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getContactsPaginations(params: any): Observable<any> {
    //console.log(params);
    return this.http.get<any>("/public/contactPaginations", { params });
  }
  getCompanysPaginations(params: any): Observable<any> {
    return this.http.get<any>("/public/companyPaginations", { params });
  }
  getAuthAccountContactsPaginations(params: any): Observable<any> {
    return this.http.get<any>("/authorize/getAuthAccountContactsPaginations", { params });
  }
  saveAuthAccountContact(params: any): Observable<any> {
    return this.http.post<any>("/authorize/saveAuthAccountContact", { params });
  }




  public getContacts() {
    return this.http.get("/public/contactCount");//?
  }
  public getLogo() {
    console.log("logo");
    return this.http.get<any>("/authorize/getLogo");//?
  }
  public getAccountInfo() {
    return this.http.get<any>("/authorize/getAcc");//?
  }
  public deleteList(params: any): Observable<any> {
    return this.http.get<any>("/authorize/deleteList");//?
  }
  public deleteItem(params: any): Observable<any> {
    return this.http.get<any>("/authorize/deleteItem");//?
  }
  public getProfile() {
    console.log("profile");
    return this.http.get<any>("/authorize/getProfile");
  }
  public getNewAccountContact(params: any) {
    //console.log(params);
    return this.http.get<any>("/authorize/getNewAccountContact",{params});
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
