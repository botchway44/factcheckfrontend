import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageCompnent implements OnInit {

  constructor(
    private searchService: SearchService
  ) {

  }

  ngOnInit(): void {
  }

  search = true;



  searchResults(event: any) {
    console.log(event);
    this.searchService.normalSearch(event).subscribe((data: any) => {
      console.log(data);
    })
  }
}
