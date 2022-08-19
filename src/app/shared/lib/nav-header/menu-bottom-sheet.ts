import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'menu-bottom-sheet',
  templateUrl: 'menu-bottom-sheet.html',
  styleUrls: ['./menu-bottom-sheet.scss']

})
export class MenuBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<MenuBottomSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}