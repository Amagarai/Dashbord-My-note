import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user: any;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage['user'])
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logOut(){
    localStorage.removeItem('user');
    this.route.navigate(['login'])
  }

}
