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
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }
}
