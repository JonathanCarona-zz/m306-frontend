import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {JetonService} from "../services/jeton.service";

@Component({
  selector: 'app-casino-dashboard',
  templateUrl: './casino-dashboard.component.html',
  styleUrls: ['./casino-dashboard.component.css']
})
export class CasinoDashboardComponent implements OnInit {
  public jetons: number = 300
  public sub: string
  public games: CasinoGames[] = [
    {
      picPath: '../../assets/slot-machine-2304135_640.png',
      routerPath: '/slotmachine',
      title: 'Slot Machine'
    }
  ]

  constructor(public authservice: AuthService, private jetonService: JetonService) { }

  ngOnInit(): void {
    let token = this.authservice.activeJWT()
    this.sub = this.authservice.decodeJWT(token).sub
    this.jetonService.getUser(this.sub)
    this.jetonService.activeUser.subscribe(x => this.jetons = x?.jeton_amount || 0)
  }

}

export interface CasinoGames {
  picPath: string
  routerPath: string
  title: string
}
