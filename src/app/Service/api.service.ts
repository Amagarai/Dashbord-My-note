import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host: string = environment.host;

  constructor(private http: HttpClient) { }

  //---Login
  Login(pseudo: string, pass: string){
    return this.http.get(this.host+"admin/"+pseudo+"/"+pass);
  }

  //---Liste des user
  ListeUser(){
    return this.http.get(this.host+"user/list");
  }

  //---Liste des notes
  ListeNote(){
    return this.http.get(this.host+"note/list");
  }
}
