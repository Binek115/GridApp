import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public constructor(private readonly httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  public getProduct(id: string): Observable<Product | null> {
    return this.httpClient.get<Product | null>('https://fakestoreapi.com/products/' + id);
  }
}
