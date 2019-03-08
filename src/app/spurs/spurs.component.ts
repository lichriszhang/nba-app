import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-spurs',
  templateUrl: './spurs.component.html',
  styleUrls: ['./spurs.component.scss']
})
export class SpursComponent implements OnInit {

  players: any
  teamId: number = 10
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }
}
