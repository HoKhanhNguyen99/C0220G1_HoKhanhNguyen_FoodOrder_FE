import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from '../../model/food/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  BASE_API_URL = 'http://localhost:8080/food';

  constructor(private httpClient: HttpClient) {}
  listFood(): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.BASE_API_URL);
  }
  findAllByName(foodName: string): Observable<Food[]>{
    return this.httpClient.get<Food[]>(this.BASE_API_URL + '/search' + '?foodName=' + foodName);
  }
}
