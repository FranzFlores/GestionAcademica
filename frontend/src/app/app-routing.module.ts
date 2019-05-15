import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import {RegisterTeacherComponent} from './components/register-teacher/register-teacher.component';
import {RegisterStudentComponent} from "./components/register-student/register-student.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'register-teacher',component:RegisterTeacherComponent},
  {path:'register-student',component:RegisterStudentComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
