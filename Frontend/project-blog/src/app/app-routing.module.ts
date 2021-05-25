import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TrainerLoginComponent } from './trainer-login/trainer-login.component';


const routes: Routes = [
  {path:'student-login',component:StudentLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'trainer-login',component:TrainerLoginComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
