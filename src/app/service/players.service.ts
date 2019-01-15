import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: any
  constructor(public http: HttpClient) { }

  getPlayerByTeam(teamId: number) {
    const searchURL = 'http://localhost:8080/players/team/' + teamId
    this.http.get(searchURL).subscribe((data) => {
      this.players = data
    })
    return this.players
  }
}
