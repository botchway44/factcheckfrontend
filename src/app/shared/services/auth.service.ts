import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  // https://www.example.com? 
  //state=state&code=VGNibzFWSWREZm01bjN1N3dicWlNUG1oa2xRRVNNdmVHelJGY2hPWGxNd2dxOjE2MjIxNjA4MjU4MjU6MToxOmFjOjE
  decodeStateCode(code: string) {
    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = {
      "code": code,
      "grant_type": "authorization_code",
      "client_id": "aXpOOWZkSm1JVHJ3S0o3YkJhSmI6MTpjaQ",
      "redirect_uri": "https://twitterfactchecker.herokuapp.com/callback",
      "code_verifier": "challenge"

    }

    return this.httpClient.post("https://api.twitter.com/2/oauth2/token", body, { headers: header })
  }


}