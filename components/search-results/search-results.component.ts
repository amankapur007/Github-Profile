import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  @Input() user:User;

  ngOnInit() {
  }


}