import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchCompnent {
  title = 'factcheck';
  @Output() queryListener = new EventEmitter();

  emitSearch() {
    console.log("Emitting data", this.title);
    this.queryListener.emit(this.title)
  }
}
