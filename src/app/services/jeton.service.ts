import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface User {
  user_id: string;
  jeton_amount: number;
  factor: number;
}

@Injectable({
  providedIn: 'root'
})
export class JetonService {
  url = environment.apiServerUrl;
  public activeUser: User;

  constructor(private auth: AuthService, private http: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
    };
    return header;
  }

  getUser(user_id) {
    if (this.auth.can('get:jeton')) {
      this.http.get(this.url + '/jetons/'+user_id, this.getHeaders())
      .subscribe((res: any) => {
        this.setActiveUser(res);
        console.log(this.activeUser)
      });
    }
  }

  setActiveUser(user: User) {
    this.activeUser = user
  }
}
