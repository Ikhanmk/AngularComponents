import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private httpClient : HttpClient) { }

  getUser(){
    const obj = {
      id: 10,
      batch: 'C',
      role: 'PP'
    }

    return obj;
  }
}
