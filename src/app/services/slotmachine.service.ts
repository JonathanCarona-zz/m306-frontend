import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./jeton.service";

@Injectable({
  providedIn: 'root'
})
export class SlotmachineService {
  url = environment.apiServerUrl;
  public activeUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private auth: AuthService, private http: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
    };
    return header;
  }

  spin(user_id, bet, jeton): Observable<spin_response> {
    return this.http.patch(this.url + '/slotmachine/spin', {
      'user_id': user_id,
      'bet': bet,
      'jeton': jeton
    }, this.getHeaders()) as Observable<spin_response>
  }
}

export interface spin_response {
  success: boolean;
  slotmachine_result: number[];
  jeton_amount: number;
  profit: number;
}
