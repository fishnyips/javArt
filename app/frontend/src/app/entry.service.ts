import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getEntries() {
    return this.http.get(`${this.uri}/entries`);
  }
}
