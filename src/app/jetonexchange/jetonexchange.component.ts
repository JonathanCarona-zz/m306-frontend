import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jetonexchange',
  templateUrl: './jetonexchange.component.html',
  styleUrls: ['./jetonexchange.component.css']
})
export class JetonexchangeComponent implements OnInit {
  public currentJeton: number = 300
  public jetonfactor: number = 5

  constructor() { }

  ngOnInit(): void {
  }

  txtChanged(e): void {
    let jetons = e.target.value
    let amount = jetons * this.jetonfactor

  }

}
