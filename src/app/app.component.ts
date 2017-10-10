import { Component } from '@angular/core';
import { LoginService } from 'app/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  newUser: User;

  ngOnInit() {
    this.newUser = new User();
    this.newUser.firstName = '';
  }

  doSubmit(values: any) {
    console.log(`values: ${JSON.stringify(values)}`);
  }

  resetMyForm(form: any) {
    form.reset();
  }
  // title = 'jci';
  // joiningDate = new Date();

  // balance = 23357.40;

  // loginService : LoginService;

  // constructor(_loginService:LoginService){
  //   console.log('AppComponent created');
  //   this.loginService = _loginService;
  //   // this.loginService = new LoginService();
  //   this.loginService.setName('Chavan');
  // }
  // handleLogin(args:string){
  //   console.log('Hnadling event in App Component');

  //   alert("got notification from child: " + args);
  // }
}

export class User{
  firstName:string;
  lastName:string;
  email:string;
  phone:number;
}