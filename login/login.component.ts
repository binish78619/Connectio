import { Component, OnInit ,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { SmsservicesService } from '../smsservices.service';;
import { Signup } from '../signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// password:string;
mobile:string; //expressions declared in html
loginpass:string;
  cname:string;
  pw:string;
  y:Signup;
 
  constructor(private router:Router,private ser :SmsservicesService)//Constructor in every compnent has
   {                                                        // service injected with the help of an object ser of type service
                                                           
                                                            //similarly router object is type router a library of angular
                                                            //used for navigating between the components
  }

  ngOnInit() {
  }

  clear(mobno: any,password: any) //function to clear the values of html text fields
  {                                //for mobile no and password when user done logging in
    mobno.value = "";
    password.value = "";
    this.mobile = "";
    this.loginpass = "";
  }
  submit(mobno:string,password:string) //function assigned to on click of a button on html 
  {                                     //to send the entered values of mobileno and password by the user
        if(mobno == "")
        {
          this.mobile = "Mobile No Cannot Be Empty";
          this.clear(mobno,password);
        }
        else if(mobno != null)
        {
          if(mobno.length>10)
          {
            this.mobile = "Invalid Mobile Number";
            this.clear(mobno,password);
          }
          if(mobno.length<10)
          {
            this.mobile = "Invalid Mobile Number";
            this.clear(mobno,password);
          }
        }
        if(password == "")
        {
          this.loginpass = "Password Cannot be Empty";
          this.clear(mobno,password);
        }
        else if(password != null)
        {
          if(password.length<8)
          {
            this.loginpass = "Password Must Have Atleast 8 Characters";
            this.clear(mobno,password);
          }
        }
        let x = new Signup();  //creating an object of class Signup
        this.y = new Signup();
        x.Name = "";
        x.Mobno = mobno;      //Assigning the mobilne no and password enetered by the user to object to send it to the backend
        x.Email = "";
        x.Password = password;
        this.ser.ajaxcall1(x).subscribe( (data)=> { this.y = data;this.cname = this.y.Mobno; this.pw = this.y.Password;  //making a call to backend with the
       if(password == this.pw)              //mobile no and password using ajaxcall function declared in service and then 
       {                                    //on the basis of password picking the mobile no and password from the db
         this.router.navigate(['myprofile']); //and sending back to match it the with entered value. 
       }
      });  
    }
  customersubmit()
  {
    this.router.navigate(['signup']); //using function of Router with the help of object of router to navigate 
  } //from login component to signup component

}
  
  


