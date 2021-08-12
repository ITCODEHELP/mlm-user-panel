import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _auth:HttpService,private router:Router) { }

  registerUser(data:any):Observable<any>{
    return this._auth.post('/auth/register',data)
  }

  loginUser(data:any):Observable<any>{
    return this._auth.post('/auth/login',data)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    this.router.navigate(['/'])
    return localStorage.clear();
  }
  
}
