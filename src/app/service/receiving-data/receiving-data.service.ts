import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceivingDataService {

  private url: string = 'https://online-clothing-store-34e45-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  private getData(value: string) {
    const data: string =  `${this.url}${value}.json`;
    return this.http.get(data);
  }

  public fetchData<T>(value: string): Observable<T[]> {
    return this.getData(value).pipe(
      map((data: T | any) => {
        return data;
      })
    );
  }

  // Відправка даних
  public sendData(key:string, data: object) {
    return this.http.put(`${this.url}${key}.json`, data)
  }
}
