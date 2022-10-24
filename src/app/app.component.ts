import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from './shared/services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'factcheckfrontend';

  constructor(
    public testService: TestService,
    public router: Router,
    public route: ActivatedRoute,) {

    testService.data = "This is in the app module"
    console.log("DATA IN APP MODULE", testService.data)
  }

  openTestRoute() {
    this.router.navigate(['/test/']);
  }
}
