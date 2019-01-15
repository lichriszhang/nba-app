import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-clippers',
  templateUrl: './clippers.component.html',
  styleUrls: ['./clippers.component.scss']
})
export class ClippersComponent implements OnInit {

  players: any
  teamId: number = 17
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
