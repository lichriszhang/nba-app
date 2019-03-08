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
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }

}
