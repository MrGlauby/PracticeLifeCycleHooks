import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { User } from '../../../services/user.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [RouterLink, FormsModule, CommonModule],
})
export class FormComponent implements OnInit {
  user!: User;
  router: any;
  users:any [] = [];

  constructor(private userService: UserService, router: Router) {
  }


  ngOnInit() {
    this.user = {
      name:'',
      age: 0,
      gender:'',
      address:'',
    };
    
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })

  }

  public addUser() :void{
    this.userService.addUser(this.user);
    this.router.navigate(['/dashboard']);
  };

}
