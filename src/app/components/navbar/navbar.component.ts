import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
// icon
@Input() iconClass: string = ""

  // placeholder, so we can use translator on it
  placeholder = {
    action: "Search"
  }

  // icon
  faSearch = faSearch;
  
  constructor() { }

  ngOnInit(): void {
  }

}
