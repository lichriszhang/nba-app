import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-blazers',
  templateUrl: './blazers.component.html',
  styleUrls: ['./blazers.component.scss']
})
export class BlazersComponent implements OnInit {

  players: any
  teamId: number = 18
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
