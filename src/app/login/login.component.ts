import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @Input() appTitle: string;
  @Output() loginPressed = new EventEmitter<string>();

  loginService: LoginService;

  constructor(_loginService: LoginService) {
    console.log('LoginComponent created');
    this.loginService = _loginService;

    // this.loginService = new LoginService();
    console.log('login - ' + this.loginService.getName());
  }

  ngOnInit() {
  }

  doLogin() {
    this.loginPressed.emit('test');
  }
}
