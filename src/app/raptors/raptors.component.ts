import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-raptors',
  templateUrl: './raptors.component.html',
  styleUrls: ['./raptors.component.scss']
})
export class RaptorsComponent implements OnInit {

  players: any
  teamId: number = 9
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
