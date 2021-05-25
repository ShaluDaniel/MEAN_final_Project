import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css']
})
export class TrainerLoginComponent implements OnInit {
  User={username:'',
  password:''} ; 
  userVerify(){
    alert("Successful Login");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
