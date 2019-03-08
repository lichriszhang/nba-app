import { HttpClient } from '@angular/common/http';
import { TEAMS } from './../teams';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams: any
  constructor(public http: HttpClient) { }

  public getAllInfo(): any {
    return new Observable((observe) => {
      const searchURL = 'http://localhost:8080/teams/all';
      this.http.get(searchURL).subscribe(
        (data) => {
          observe.next(data);
        }
      );
    });
  }

}
