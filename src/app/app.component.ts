import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.load_jwts();
    this.auth.check_token_fragment();

    if (!this.auth.activeJWT()) {
      window.location.href = this.auth.build_login_link()
    }
  }

  title = 'm306-frontend';
}
