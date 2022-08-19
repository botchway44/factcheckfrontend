import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MenuBottomSheet } from './menu-bottom-sheet';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderCompnent {
  @Input() title = 'factcheck';

  @Output() triggered = new EventEmitter();

  constructor(private _bottomSheet: MatBottomSheet) { }

  navigationClicked(item: string) {
    this.triggered.emit(item);
    console.log(item);
  }


  openMenu() {
    this._bottomSheet.open(MenuBottomSheet);

  }


}
