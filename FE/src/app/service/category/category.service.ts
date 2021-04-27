import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../model/category/category";

const BASE_API_URL = 'http://localhost:8080/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryUrl = BASE_API_URL + "/category";
  constructor(private httpClient: HttpClient) {
  }

  listCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoryUrl);
  }
}
