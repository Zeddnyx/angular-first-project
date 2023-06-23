import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../types/dataService';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000';
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.url + '/posts');
  }

  getDataParams(params1: string): Observable<any> {
    let params = new HttpParams().set('userId', params1);
    return this.http.get(this.url + '/posts', {
      params,
    });
  }

  postData(data: object) {
    return this.http.post(this.url + '/posts', data).subscribe({
      next: () => {
        alert('Post added');
      },
      error: (e) => {
        console.log('Error :(', e);
      }
    });
  }

  editData(data: object, id: number): Observable<any> {
    return this.http.put(this.url + '/posts/' + id, data)
  }

  deleteData(id: number) {
    return this.http.delete(this.url + '/posts/' + id);
  }

}
