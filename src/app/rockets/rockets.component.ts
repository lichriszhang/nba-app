import { PlayersService } from './../service/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {

  players: any
  teamId: number = 2
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
