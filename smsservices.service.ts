import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { Login } from './login';
import { Signup } from './Signup';
import { MyPost } from './my-post';
import { Connection } from './connection';
const httpOptions = {
  headers: new HttpHeaders({'ContentType': 'application/json' }), //used for specifying the type of data to accept from backend
  headers1 : new HttpHeaders({'Content-Type': 'text/plain; charset=utf-8'})
};



@Injectable({
  providedIn: 'root'
})

/*
THIS IS THE SERVICE CLASS
Services in angular is used for sharing data between components

OBSERVABLE
It is a class of RxJS library which is used to store data coming from the backend and emits values only when
you have subscribed to it with the help of a subscribe function
*/
export class SmsservicesService { 
  constructor(private mac :HttpClient) //Http Client is injectable class used for performing http requests
  {                                     //mac is an object of http client
  }
  ajaxcall1(x :any) :Observable<Signup>  //for sending login details of the user to the backend
  {                                       //post method to send the object
    let urilink="http://localhost:8080/login";
     let body = JSON.stringify(x);           
     let headers = new Headers({ 'Content-Type': 'application/json' });
      return  this.mac.post<Signup>(urilink,body);
  }
 ajaxcall2(x :number)  //for getting the name of the user which is logging in with the help of password
  {                     //get method is used
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
      let urilink="http://localhost:8080/getname?y="+x;
      return  this.mac.get(urilink, {responseType: 'text'});
  }
   ajaxcall3(x: Signup) //for inserting the user details entered at the time of signup
  {                     //post method is used to send signup class object
      let urilink="http://localhost:8080/AddUserDetail";
      let body = JSON.stringify(x);            
      let headers = new Headers({ 'Content-Type': 'application/json' });
      return  this.mac.post(urilink,body);
  }
  ajaxcall4(x: MyPost)  //to insert the caption and image selected by the user to post
  {                       //using post method to send a Mypost class object 
      let urilink="http://localhost:8080/NewPost";
      let body = JSON.stringify(x);            
      let headers = new Headers({ 'Content-Type': 'application/json' });
      return  this.mac.post(urilink,body);
  }

  ajaxcall5(x: string) :Observable<MyPost> //to retrieve the posts done previously by the user on its myprofile page
  {
    let urilink="http://localhost:8080/GetPost?y="+x;
    return  this.mac.get<MyPost>(urilink);
  }
  ajaxcall6(x:number) :Observable<Connection>//to retrieve the names of users to which a particular user is connected
  {
    let urilink="http://localhost:8080/GetConnection";
    let body = JSON.stringify(x);            
    return  this.mac.post<Connection>(urilink,body);
  }
  ajaxcall7(x:number) :Observable<Connection>
  {
    let urilink="http://localhost:8080/GetNonConnection";//to retrieve the names of users to which a particular user is not connected
    let body = JSON.stringify(x);            
    return  this.mac.post<Connection>(urilink,body);
  }
  
  ajaxcall8(x: string) :Observable<MyPost>
  {
    let urilink="http://localhost:8080/GetPost1?y="+x;
    return  this.mac.get<MyPost>(urilink);
  }
  ajaxcall9(x: string) :Observable<MyPost>
  {
    let urilink="http://localhost:8080/GetPost2?y="+x;
    return  this.mac.get<MyPost>(urilink);
  }
  ajaxcall10(x:number) :Observable<Connection> //to retrieve mutual connections between two users
  {
    let urilink="http://localhost:8080/GetMConnection";
    let body = JSON.stringify(x);            
    console.log(x);
    return  this.mac.post<Connection>(urilink,body);
  }
  ajaxcall11(x:number) :Observable<Connection>// to retrieve suggested connections
  {
    let urilink="http://localhost:8080/GetSConnection";
    let body = JSON.stringify(x);            
    console.log(x);
    return  this.mac.post<Connection>(urilink,body);
  }
 
}