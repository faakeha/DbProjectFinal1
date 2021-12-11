import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpParams, HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ProductModelServer, ServerResponse } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url= environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  //connect frontend to backend
  apiUrlcustomer = 'http://localhost:3000/getcustomer';
  apiUrladdress = 'http://localhost:3000/getaddress';
  apiUrlorders = 'http://localhost:3000/getorders';
  apiUrlbrand = 'http://localhost:3000/getbrand';
  apiUrlbrandproduct = 'http://localhost:3000/getbrand_product';
  apiUrlcart = 'http://localhost:3000/getcart';
  apiUrltracker = 'http://localhost:3000/gettracker';
  apiUrlreview = 'http://localhost:3000/getreview';
  apiUrlproduct = 'http://localhost:3000/getproduct';
  apiUrlcategory = 'http://localhost:3000/getcategory';

  //insert data (sign up)
  insertData(data:any): Observable<any>{
    console.log(data, 'createapi=>');
    return this.http.post(`${this.apiUrlcustomer}`, data);
  }

  //insert data (Address)
  insertAddress(data:any): Observable<any>{
    console.log(data, 'createapi=>');
    return this.http.post(`${this.apiUrladdress}`, data);
  }

 generateTracking(data:any): Observable<any>{
    console.log(data, 'createapi=>');
    return this.http.post(`${this.apiUrltracker}`, data);
  }

  

  getProducts(data: any, brand: any): Observable<any>{
    console.log('get products method working');
    let categoryid = data;
    console.log(categoryid, brand);
    
    return this.http.get(`${this.apiUrlproduct}/${categoryid}/${brand}`);
    
  }
  
  
  getAllProducts(limitOfResults=10): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }
  
  /* this is to fetch all products from the backend server*/

  // getSingleProduct(id: Number): Observable<ProductModelServer> {
  //   return this.http.get<ProductModelServer>(this.url + 'products/' + id);
  // }

  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + 'products/category/' + catName);
  }

  //get single data
  getSingleData(email:any, pass:any):Observable<any>{
    console.log('createapi=>', email, pass);
    //let em = data;
    let params = new HttpParams()
    .set('Email', email)
    .set('Pass', pass);

    console.log("params:", params.get('Email'));

    return this.http.get(`${this.apiUrlcustomer}/${email}/${pass}`);
  }

  deleteFromCart(pid:any, data:any): Observable<any>{
    console.log('createapi=>', data );
    let prodid = pid;

    return this.http.delete(`${this.apiUrltracker}/${prodid}`, data);
  }

  insertIntoCart(productid:any, qty:any): Observable<any>{
   // console.log('createapi=>', productid, qty);
    let data = [productid, qty];
    console.log('createapi=>', data);
    return this.http.post(`${this.apiUrlcart}`, data);
  }

  getCart():Observable<any>{
    return this.http.get(`${this.apiUrlcart}`);
  }

  updateQty(prodid:any, qty:any):Observable<any>{
    console.log(prodid, qty);
    let change = [prodid, qty];
    return this.http.put(`${this.apiUrlcart}`, change);
  }

  dropcart():Observable<any>{
    return this.http.delete(`${this.apiUrlcart}`);
  }

  //insert order
  insertOrder(data:any):Observable<any>{
    console.log(data, 'createapi=>');
    return this.http.post(`${this.apiUrlorders}`, data);
}

getTracking(email:any): Observable<any>{
  console.log(email, 'createapi=>');

  return this.http.get(`${this.apiUrltracker}/${email}`);
}
}
function data(data: any, arg1: string) {
  throw new Error('Function not implemented.');
}






