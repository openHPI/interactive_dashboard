import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  getAll(url: string): Observable<Object[]> {
    return this.http.get(url)
      .map(this.extractData);
  }

  private extractData(response: Response) {
    let json = response.json();
    return json.data || { };
  }
}
