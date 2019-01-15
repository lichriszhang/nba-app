import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-pelicans',
  templateUrl: './pelicans.component.html',
  styleUrls: ['./pelicans.component.scss']
})
export class PelicansComponent implements OnInit {

  players: any
  teamId: number = 28
  constructor(public playersService: PlayersService) { 
    this.players = this.playersService.getPlayerByTeam(this.teamId)
  }

  ngOnInit() {
    setTimeout(() => {
      this.players = this.playersService.getPlayerByTeam(this.teamId)
    }, 1000);
    console.log(this.players)
  }
}
