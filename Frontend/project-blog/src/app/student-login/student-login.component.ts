import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
  exportAs:'ngModel'
})
export class StudentLoginComponent implements OnInit {
  User={username:'',
  password:''} ;

  userVerify(){
    alert("Successful Login");

    this.auth.userVerify(this.User)
    .subscribe(
      res=>{

     localStorage.setItem('token',res.token)
     this.router.navigate(['blogform'])
  })
  }

  constructor(private auth:AuthService,  private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {

    
  }
 
}
