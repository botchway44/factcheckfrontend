import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackCompnent implements OnInit {
  title = 'factcheck';

  //   https://twitter.com/i/oauth2/authorize?response_type=code&client_id=aXpOOWZkSm1JVHJ3S0o3YkJhSmI6MTpjaQ&redirect_uri=http://localhost:4200m&scope=tweet.read%20users.read%20follows.read%20offline.access&state=foo&code_challenge=bar&code_challenge_method=plain
  // https://www.example.com/?state=state&code=eWQ0SFlqWnVBUVFaMl84TWg1bk0zQnBZMnYzSzJsc3phYUFrd3NSeGpkTGhuOjE2NjA5MDI1OTE0MDY6MTowOmFjOjE
  redirectUrl = 'http://localhost:4200/callback'
  loginUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=aXpOOWZkSm1JVHJ3S0o3YkJhSmI6MTpjaQ&redirect_uri=https://twitterfactchecker.herokuapp.com&scope=tweet.read%20users.read%20follows.read%20follows.write&state=state&code_challenge=challenge&code_challenge_method=plain`;
  // https://twitterfactchecker.herokuapp.com/#/
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {

  }

  loginWithRedirect(): void {
    // Call this to redirect the user to the login page
    // this.auth.loginWithRedirect();
    window.location.href = this.loginUrl;
  }
}
