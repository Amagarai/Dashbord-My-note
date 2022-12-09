import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'admin-panel-layout';
  sideBarOpen = true;
  user: any;
  list_user: any;
  list_note: any;
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage['user']);
    this.ListNote();
    this.ListUser()
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ListUser(){
    return this.service.ListeUser().subscribe(res =>{
      this.list_user = res
      console.log(res);

    })
  }

  ListNote(){
    return this.service.ListeNote().subscribe(res =>{
      this.list_note = res
    })
  }

}
