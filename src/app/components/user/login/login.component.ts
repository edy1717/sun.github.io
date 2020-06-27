import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formLogi();
  }

  formLogi(){
    this.formLogin = new FormGroup ({
      email: new FormControl( null ),
      password: new FormControl ( null )
    })
  }

}
