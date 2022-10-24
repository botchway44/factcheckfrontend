import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable(
  {
    providedIn: 'root',
  }
)
export class TestService {

  constructor(
    private httpClient: HttpClient
  ) {
    console.log("New Service constructor")
  }

  data = "starting test service";

}