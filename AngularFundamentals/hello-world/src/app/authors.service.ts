import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["JK Rowling", "Rick Riordan", "DJ MacHale"];
  }
}
