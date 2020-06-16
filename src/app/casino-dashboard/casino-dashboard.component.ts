import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casino-dashboard',
  templateUrl: './casino-dashboard.component.html',
  styleUrls: ['./casino-dashboard.component.css']
})
export class CasinoDashboardComponent implements OnInit {
  public jetons: number = 300
  constructor() { }

  ngOnInit(): void {
  }

}
