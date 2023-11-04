import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceivingDataService {

   constructor(private httpClient: HttpClient) { }

  private getData(value: string ) {
    const data: string = `https://online-clothing-store-34e45-default-rtdb.europe-west1.firebasedatabase.app/${value}.json`;
    return this.httpClient.get(data);
  }

  public fetchData<T>(value: string): Observable<T[]> {
    return this.getData(value).pipe(
      map((data: T | any) => {
        return data;
      })
    );
  }
}
