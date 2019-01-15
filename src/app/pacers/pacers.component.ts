import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-pacers',
  templateUrl: './pacers.component.html',
  styleUrls: ['./pacers.component.scss']
})
export class PacersComponent implements OnInit {

  players: any
  teamId: number = 26
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
