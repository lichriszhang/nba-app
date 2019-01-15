import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-thunder',
  templateUrl: './thunder.component.html',
  styleUrls: ['./thunder.component.scss']
})
export class ThunderComponent implements OnInit {

  players: any
  teamId: number = 11
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
