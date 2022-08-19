import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationCompnent {
  title = 'factcheck';

  @Output() triggered = new EventEmitter();


  navigationClicked(item: string) {
    this.triggered.emit(item);
    console.log(item);
  }
}
