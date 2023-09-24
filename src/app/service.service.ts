import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { album, photos, product } from './model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  getalbums() {
    return this._http.get<album>('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotos() {
    return this._http.get<photos>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  getProduct(): Observable<HttpResponse<product>> {
    return this._http.get<product>('https://dummyjson.com/products').pipe(
      map((res: any) => res?.products),
      take(50)
    );
  }

  getId(index: number, item: product) {
    return item.id;
  }
}
