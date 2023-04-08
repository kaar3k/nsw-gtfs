import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NSWService {

  constructor() { 

  }

  getData(): String {
    return "Hey Man";
  }
}
