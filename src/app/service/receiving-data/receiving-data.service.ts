import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IDataProduct } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ReceivingDataService {

  private url: string = 'https://online-clothing-store-34e45-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  private getData(value?: string) {
    const data: string = `${this.url}${value}.json`;
    return this.http.get(data);
  }

  public fetchData<T>(value: string): Observable<T[]> {
    return this.getData(value).pipe(
      map((data: T | any) => {
        return data;
      })
    );
  }

  private data: IDataProduct[] = new Array<IDataProduct>;
  // Відправка даних
  public sendData(value: string, dataValue: IDataProduct) {

    this.data.push(dataValue);
    return this.http.post(`${this.url}clothes/${value}.json`, dataValue).subscribe(elem => {
      console.log(elem);
    });
  }
}
