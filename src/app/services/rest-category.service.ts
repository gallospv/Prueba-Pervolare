import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestCategoryService {
  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(url);
  }

  public postCategory(url: string, body: any) {
    return this.http.post(url, body);
  }

  public updateCategory(url: string, body: any) {
    return this.http.put(url, body);
  }

  public deleteCategory(url: string) {
    return this.http.delete(url);
  }
}
