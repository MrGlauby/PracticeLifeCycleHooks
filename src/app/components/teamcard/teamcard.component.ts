import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Players, HockeyTeams } from '../../../services/user.interface';
import { TeamPlayersService } from '../../../services/teamplayers.service';

@Component({
  selector: 'app-teamcard',
  standalone: true,
  templateUrl: './teamcard.component.html',
  styleUrl: './teamcard.component.scss',
  imports: [CommonModule]
})
export class TeamcardComponent implements OnInit {

  @Input() teamname: string = '';

  players: Players[] = [];
  team!: HockeyTeams; 

  constructor(private teamPlayersService: TeamPlayersService) {}

  ngOnInit(): void {
    this.loadTeam();
    this.loadPlayers();
  }

  public loadTeam(): void {
    this.teamPlayersService.getTeams().subscribe(teams => {
      this.team = teams.find(t => t.teamname === this.teamname)!;
    });
  }

  public loadPlayers(): void {
    this.teamPlayersService.getPlayersByTeam(this.teamname).subscribe(players => {
      this.players = players;
    });
  }
}
