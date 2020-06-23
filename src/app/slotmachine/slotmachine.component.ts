import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SlotmachineService} from "../services/slotmachine.service";
import {AuthService} from "../services/auth.service";
import {JetonService} from "../services/jeton.service";

@Component({
  selector: 'app-slotmachine',
  templateUrl: './slotmachine.component.html',
  styleUrls: ['./slotmachine.component.css']
})
export class SlotmachineComponent implements OnInit {
  public form: FormGroup
  public sub: string
  public pics: number[] = [0, 0, 0]
  constructor(private fb: FormBuilder, private slotmachineService: SlotmachineService, private authService: AuthService, private jetonService: JetonService) { }

  private jetonLeft: number
  ngOnInit(): void {
    let token = this.authService.activeJWT()
    this.sub = this.authService.decodeJWT(token).sub
    this.jetonService.getUser(this.sub)

    this.form = this.fb.group({
      profit: [''],
      value: ['', [Validators.required, Validators.min(1)]],
      jetonLeft: ['']
    })
    this.jetonService.activeUser.subscribe(x => {
      this.form.get('jetonLeft').setValue(x?.jeton_amount ?? 0)
      this.jetonLeft = x?.jeton_amount ?? 0
    })
  }

  submit(): void {
    if (!this.form.valid) return

    const bet = this.form.get('value').value
    this.slotmachineService.spin(this.sub, bet, this.jetonLeft).subscribe((x) => {
      this.setFormValue(x.jeton_amount, x.profit)
      this.pics = x.slotmachine_result
    })
  }

  private setFormValue(jetonLeft: number, profit: number) {

    this.form.setValue({
      profit: profit,
      value: this.form.get('value').value,
      jetonLeft: jetonLeft
    })
  }
}
