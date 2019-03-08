import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-celtic',
  templateUrl: './celtic.component.html',
  styleUrls: ['./celtic.component.scss']
})
export class CelticComponent implements OnInit {

  players: any
  teamId: number = 4
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }

}
