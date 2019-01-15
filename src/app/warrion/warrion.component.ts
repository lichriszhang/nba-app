import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-warrion',
  templateUrl: './warrion.component.html',
  styleUrls: ['./warrion.component.scss']
})
export class WarrionComponent implements OnInit {

  players: any
  teamId: number = 6
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
