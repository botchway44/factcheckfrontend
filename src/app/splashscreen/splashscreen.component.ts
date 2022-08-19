import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss']
})
export class SplashScreen {
  title = 'factcheck';


  constructor(
    private router: Router
  ) {
    this.loadNextPage();

  }

  loadNextPage() {
    setTimeout(() => {
      console.log('loading next page')
      this.router.navigateByUrl("auth")
    }, 3000)
  }
}
