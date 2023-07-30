import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetails } from '../contracts/product-details';

@Injectable({
  providedIn: 'root'
})
export class AmazonProductsService {

  constructor(private _http:HttpClient) { }

  public GetProducts():Observable<ProductDetails[]>{
    return this._http.get<ProductDetails[]>('https://fakestoreapi.com/products');
  }
  public GetProductsById(id:number):Observable<ProductDetails>{
    return this._http.get<ProductDetails>('https://fakestoreapi.com/products/'+id);
  }
  public GetCategories():Observable<string[]>{
    return this._http.get<string[]>('https://fakestoreapi.com/products/categories');
  }
  public GetProductByCategoryName(categoryName:string):Observable<ProductDetails[]>{
    return this._http.get<ProductDetails[]>('https://fakestoreapi.com/products/category/'+categoryName);
  }
}
