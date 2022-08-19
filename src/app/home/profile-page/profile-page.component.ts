import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetLogout } from './bottom-sheet';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageCompnent {

  constructor(private _bottomSheet: MatBottomSheet) { }


  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetLogout);
  }
}

