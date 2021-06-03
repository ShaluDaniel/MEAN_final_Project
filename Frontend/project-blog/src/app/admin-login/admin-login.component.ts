import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { FormsModule, FormBuilder,Validators,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Admin=
  {
    username:'',
  password:'12345'} ;
  constructor(private auth:AuthService, private router:Router, private fb:FormBuilder ) { }
  ngOnInit(): void {
  }
   userVerify(){
    this.auth.userVerify(this.Admin)
    .subscribe(
      (      res: { token: string; }) => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/blogForm'])
      },
      (      err: any) => {
        console.log(err);
        this.router.navigate(['/blogForm'])
      }
    ) 
   
}
  

 

      
}  
