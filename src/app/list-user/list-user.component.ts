import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  title = 'admin-panel-layout';
  sideBarOpen = true;
  list: any;
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.Liste()
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  Liste(){
    return this.service.ListeUser().subscribe(res=>{
      this.list = res
      console.log(res);

    })
  }

}
