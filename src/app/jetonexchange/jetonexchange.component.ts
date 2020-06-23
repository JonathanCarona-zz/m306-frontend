import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { JetonService } from '../services/jeton.service';

@Component({
  selector: 'app-jetonexchange',
  templateUrl: './jetonexchange.component.html',
  styleUrls: ['./jetonexchange.component.css']
})
export class JetonexchangeComponent implements OnInit, OnDestroy {
  public currentJeton: number = 0
  public jetonfactor: number = 1
  private sub: string
  public form: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private authService: AuthService, public jetonService: JetonService) { }

  ngOnInit(): void {
    let token = this.authService.activeJWT()
    this.sub = this.authService.decodeJWT(token).sub
    console.log(this.sub)
    this.jetonService.getUser(this.sub)
    this.jetonService.activeUser.subscribe(x =>  {
      this.jetonfactor = x?.factor || 1
      this.currentJeton = x?.jeton_amount ?? 0
    })

    this.form = this.fb.group({
      jeton: ['', [Validators.required, Validators.min(1)]],
      amount: ['']
    })
  }

  txtChanged(e): void {
    let jetons = e.target.value
    let amount = jetons * this.jetonfactor

    this.setAmount(jetons, amount)
  }

  private setAmount(jeton: number, value: number): void {
    this.form.setValue({
      jeton: jeton,
      amount: value
    })
  }

  submit(): void {
    if (!this.form.valid) return
    let jeton = this.form.get('jeton').value
      jeton += this.currentJeton
      this.jetonService.exchange(this.sub, jeton).subscribe(null, err => console.error(err), () => this.router.navigate(['/casino']))
      //TODO send request
      this.router.navigate(['/'])
  }

  ngOnDestroy(): void {

  }
}
