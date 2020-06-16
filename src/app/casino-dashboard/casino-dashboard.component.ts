import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casino-dashboard',
  templateUrl: './casino-dashboard.component.html',
  styleUrls: ['./casino-dashboard.component.css']
})
export class CasinoDashboardComponent implements OnInit {
  public jetons: number = 300
  public games: CasinoGames[] = [
    {
      picPath: '../../assets/slot-machine-2304135_640.png',
      routerPath: '/slotmachine',
      title: 'Slot Machine'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface CasinoGames {
  picPath: string
  routerPath: string
  title: string
}