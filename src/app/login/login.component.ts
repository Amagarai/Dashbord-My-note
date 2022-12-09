import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  donne: any;
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  Login(data: NgForm){
    return this.service.Login(data.value.login, data.value.password).subscribe(res =>{
      if(res){
        console.log(res);
        this.donne = res;
        localStorage.setItem('user', JSON.stringify(this.donne))
        this.router.navigate(['home'])
      }else{
        console.log("mot de passe inconr");

      }
    })
  }
}
