import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import{HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { UserComponent } from './user/user.component';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { BlogFormComponent } from './blog-form/blog-form.component';
import{AuthService} from './auth.service'
import{AuthGuard} from './auth.guard'
import { TokenInterceptorService } from './token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    UserComponent,
    BlogFormComponent,
    HttpClient,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
