import { Component } from '@angular/core';
import { TestService } from '../shared/services/test.service';

@Component({
  selector: 'test-root',
  templateUrl: './test.component.html',
  styleUrls: []
})
export class TestComponent {
  title = 'factcheckfrontend';


  constructor(public testService: TestService) {
    console.log("DATA IN TEST MODULE", testService.data)
  }

}
