import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  hidden: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
