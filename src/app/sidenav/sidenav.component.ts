import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  hidden: boolean = false;
  user: any;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage['user'])
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
