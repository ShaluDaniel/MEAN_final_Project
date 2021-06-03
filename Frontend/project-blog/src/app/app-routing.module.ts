import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { UserComponent } from './user/user.component';
import {AuthGuard} from './auth.guard';
import { BlogFormComponent } from './blog-form/blog-form.component';




const routes: Routes = [
  {path:'student-login',component:StudentLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'',component:HomeComponent},
  {path:'blogform',
  canActivate:[AuthGuard],
  component:BlogFormComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
