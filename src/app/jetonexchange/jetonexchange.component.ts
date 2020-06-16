import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jetonexchange',
  templateUrl: './jetonexchange.component.html',
  styleUrls: ['./jetonexchange.component.css']
})
export class JetonexchangeComponent implements OnInit {
  public currentJeton: number = 300
  public jetonfactor: number = 5
  public form: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      jeton: ['', Validators.required],
      amount: ['', Validators.required]
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
    //TODO send request
    this.router.navigate(['/'])
  }
}
