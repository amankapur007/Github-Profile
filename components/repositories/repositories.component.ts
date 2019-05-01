import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../models/repository'
@Component({
  selector: 'repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() repo:Repository
  constructor() { }

  ngOnInit() {
  }


  

}