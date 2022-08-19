import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeCompnent {
  title = 'factcheck';



  constructor(public auth: AuthService) {
    auth.getUser().subscribe((user) => {
      console.log(user)
    })
  }


  activePages = {
    LINK: false,
    SEARCH: false,
    PROFILE: true,
  };

  navigatePage(event: any) {
    console.log(event)
    if (event === "LINK") {
      this.activePages = {
        LINK: true,
        SEARCH: false,
        PROFILE: false,
      };
    } else if (event === "SEARCH") {
      this.activePages = {
        LINK: false,
        SEARCH: true,
        PROFILE: false,
      };
    } else if (event === "PROFILE") {
      this.activePages = {
        LINK: false,
        SEARCH: false,
        PROFILE: true,
      };
    }
  }
}
