import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { TeamPlayersService } from '../../../services/teamplayers.service';

import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [CommonModule, RouterLink]
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private teamPlayersService: TeamPlayersService) { }

  users: any[] = [];
  hockeyTeam: any[] = [];
  

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  
  }
}









