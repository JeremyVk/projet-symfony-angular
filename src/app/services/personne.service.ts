import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Personne} from '../interfaces/personne'
@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url: string = 'http://127.0.0.1:8000/ws/personnes';
  constructor(private http: HttpClient) { }

  getAllPersons() {
    return this.http.get<Array<Personne>>(this.url);
  }

  addPerson(p: Personne) {
    return this.http.post<Personne>(this.url, p)
  }
}
