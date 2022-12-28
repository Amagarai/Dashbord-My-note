import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenue Mlle '+ this.donne.nom,
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigate(['home'])
      }else{
        Swal.fire(
          'Incorrect!',
          'Mot de passe ou login incorrect.',
          'error'
        )
      }
    })
  }
}
