import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'https://dummyjson.com';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.API_URL}/products`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.API_URL}/products/categories`);
  }
}