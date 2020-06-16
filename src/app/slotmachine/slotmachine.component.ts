import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-slotmachine',
  templateUrl: './slotmachine.component.html',
  styleUrls: ['./slotmachine.component.css']
})
export class SlotmachineComponent implements OnInit {
  public form: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      profit: [''],
      value: ['', [Validators.required, Validators.min(1)]],
      jetonLeft: ['']
    })
  }

  submit(): void {
    if (!this.form.valid) return
  }

  private setFormValue(jetonLeft: number, profit: number) {
    this.form.setValue({
      profit: profit,
      value: this.form.get('value').value,
      jetonLeft: jetonLeft
    })
  }
}
