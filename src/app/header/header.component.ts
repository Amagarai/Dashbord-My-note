import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user: any;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage['user'])
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logOut(){

  }

}
