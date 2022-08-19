import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeCompnent {
  title = 'factcheck';



  constructor(
  ) {

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
