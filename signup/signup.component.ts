import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SmsservicesService } from '../smsservices.service';
import { Signup } from '../signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mobile:string;
loginpass:string;
em:string;
nm:string;
y:Signup;
  constructor(private router:Router,private ser :SmsservicesService) { }

  ngOnInit() {
  }
    
     clear(mobno: any,password: any,email:any,Name:any) //clears the values of all the text fields 
      {                                                 //when user has done signing up
        Name.value = "";
        mobno.value = "";
        email.value = "";
        password.value = "";
        this.nm="";
        this.mobile = "";
        this.em="";
        this.loginpass = "";
      }
      submit(Name:string,mobno:string,email:string,password:string) //gets the values entered by the user
      {                                                             //in the text fields during entering the details
            if(Name == "")                                          //for signing up
            {
              this.nm = "Name Cannot Be Empty";                      
              this.clear(Name,mobno,email,password);
            }
            if(mobno == "")
            {
              this.mobile = "Mobile No Cannot Be Empty";
              this.clear(Name,mobno,email,password);
            }
            else if(mobno != null)
            {
              if(mobno.length>10)           //has all validations
              {
                this.mobile = "Invalid Mobile Number";
                this.clear(Name,mobno,email,password);
              }
              if(mobno.length<10)
              {
                this.mobile = "Invalid Mobile Number";
                this.clear(Name,mobno,email,password);
              }
            }
           
            if(email == "")
            {
              this.em = "Email Cannot Be Empty";
              this.clear(Name,mobno,email,password);
            }
            if(password == "")
            {
              this.loginpass = "Password Cannot Be Empty";
              this.clear(Name,mobno,email,password);
            }
            else if(password != null)
            {
              if(password.length<8)
              {
                this.loginpass = "Password Must Have Atleast 8 Characters";
                this.clear(Name,mobno,email,password);
              }
            }
          
            let x = new Signup(); //creating a object of signup class which has fields namely name,mobno,email,password
            this.y = new Signup(); //so an object of it can be sent to backend for storing details to the database
            x.Name = Name;
            x.Mobno = mobno;
            x.Email = email;
            x.Password = password;
            console.log(x);
            this.ser.ajaxcall3(x).subscribe( (data)=> { console.log("Inserted") 
          });
      }  
    }


