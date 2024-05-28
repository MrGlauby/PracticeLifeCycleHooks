import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    // Hier könnte ich tatsächlich Daten von einem Server laden - Ab in meinem Beispiel verwende ich  statische Daten
    { name: 'Alice', age: 30, gender: 'female', address: '123 Main St' },
    { name: 'Bob', age: 25, gender: 'male', address: '456 Elm St' },
    { name: 'Tom', age: 43, gender: 'male', address: '789 GA St' },
    { name: 'Mike', age: 63, gender: 'male', address: '432 EF St' },
    { name: 'Charls', age: 57, gender: 'male', address: '534 VC St' },
    { name: 'Mandy', age: 12, gender: 'female', address: '125 SSL; St' },
    { name: 'San', age: 34, gender: 'female', address: '245 CC St' },
    { name: 'Kalle', age: 22, gender: 'male', address: '34 DD St' },
  ];


  constructor() { }

  addUser(user: User) {
    this.users.push(user);

  }

  getUsers(): Observable<User[]> {
    return of(this.users);

  }

}
