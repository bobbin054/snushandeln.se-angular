import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, find, tap } from 'rxjs/operators';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'assets/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = '';
    if (errorResponse.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${errorResponse.error.message}`;
    } else {
      errorMessage = `Server returned code: ${errorResponse.status}, error message is: ${errorResponse.message}`;
    }
    // console.error(errorMessage);
    return throwError(errorMessage);
  }
}
