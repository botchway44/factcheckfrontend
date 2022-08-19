import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
  styleUrls: ['./bottom-sheet.scss']

})
export class BottomSheetLogout {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetLogout>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}