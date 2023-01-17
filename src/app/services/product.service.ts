import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productUrl = 'assets/products.json';
  constructor(private _httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._httpClient
      .get<IProduct[]>(this._productUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      return throwError(`An error occurred: ${errorResponse.error.message}`);
    }
    return throwError(
      `Server returned code: ${errorResponse.status}, error message is: ${errorResponse.message}`
    );
  }
}
