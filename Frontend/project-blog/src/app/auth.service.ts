import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  userVerify(user:any){
    return this.http.post<any>("http://localhost3000/login",user)
    
   
  }

  constructor( private http:HttpClient) { }
}
