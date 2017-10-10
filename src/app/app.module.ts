import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModule } from 'app/login/login.module';
import { LoginService } from 'app/login.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
