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
      // 'Content-Type': 'application/json',
    });

    const body = {
      "code": code
    }

    return this.httpClient.post("https://1f8c-196-11-90-118.eu.ngrok.io/User/GetData/", body, { headers: header })
  }

  // curl \
  // -H "Authorization: Bearer UldjOFgwTkRIa08zZzluNGRaUDc5WXlMVnlaQ1gxMno0cjhycnFnZlJCbDNfOjE2NjA5MjQzMzQ3NzM6MTowOmF0OjE" \
  // "https://api.twitter.com/2/users/me?user.fields=name%2Curl%2Cprofile_image_url%2Cusername%2Cpublic_metrics"
  getProfile(code: string) {
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