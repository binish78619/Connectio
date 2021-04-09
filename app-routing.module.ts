import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';   //for routing every component needs to imported here
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PostComponent } from './post/post.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ConnprofileComponent } from './connprofile/connprofile.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'signup',component:SignupComponent},  //then added to a  array routes of type Routes which represents a route configuration for the Router service.
{path:'myprofile',component:MyprofileComponent},
{path:'post',component:PostComponent},
{path:'userprofile',component:UserprofileComponent},
{path:'connprofile',component:ConnprofileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
