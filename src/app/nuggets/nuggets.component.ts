import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-nuggets',
  templateUrl: './nuggets.component.html',
  styleUrls: ['./nuggets.component.scss']
})
export class NuggetsComponent implements OnInit {

  players: any
  teamId: number = 16
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
