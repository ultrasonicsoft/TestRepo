import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  name = 'Balram';

  constructor() {
    console.log('LoginService created');
  }

  getName(){
    return this.name;
  }
  setName(userName:string){
    this.name = userName;
  }
}
