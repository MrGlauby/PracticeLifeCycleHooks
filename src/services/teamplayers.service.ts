import { Injectable } from '@angular/core';
import { HockeyTeams } from './user.interface';
import { Players } from './user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamPlayersService {
  // Benutze diese drei teams und baue jedes Team auf eine extra Seite!! 

  // ALL TEAMS
  public teams: HockeyTeams[] = [
    { teamname: 'Edmonton Oilers' },
    { teamname: 'Toronto Maple Leafs' },
    { teamname: 'Tampa Bay Lightning' }
  ];

  // PLAYERS
  private players: { [key: string]: Players[] } = {
    'Edmonton Oilers': [
      { name: 'Steven Stamkos', shirtNumber: 91, position: 'Center' },
      { name: 'Ryan McDonagh', shirtNumber: 27, position: 'Defenseman' },
      { name: 'Andrei Vasilevskiy', shirtNumber: 88, position: 'Goalie' },
      { name: 'Brayden Point', shirtNumber: 21, position: 'Center' }
    ],
    'Toronto Maple Leafs': [
      { name: 'Nikita Kucherov', shirtNumber: 86, position: 'Right Wing' },
      { name: 'Victor Hedman', shirtNumber: 77, position: 'Defenseman' },
      { name: 'Andrei Vasilevskiy', shirtNumber: 88, position: 'Goalie' },
      { name: 'Brayden Point', shirtNumber: 21, position: 'Center' }
    ],
    'Tampa Bay Lightning': [
      { name: 'Steven Stamkos', shirtNumber: 91, position: 'Center' },
      { name: 'Ryan McDonagh', shirtNumber: 27, position: 'Defenseman' },
      { name: 'Andrei Vasilevskiy', shirtNumber: 88, position: 'Goalie' },
      { name: 'Brayden Point', shirtNumber: 21, position: 'Center' }
    ]
  };

  constructor() { }

  public getTeams(): Observable<HockeyTeams[]> {
    return of(this.teams);
  }

  public getPlayersByTeam(teamname: string): Observable<Players[]> {
    return of(this.players[teamname] || []);
  }
}
