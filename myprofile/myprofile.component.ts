import { CloseScrollStrategyConfig } from '@angular/cdk/overlay/typings/scroll/close-scroll-strategy';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Connection } from '../connection';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { SmsservicesService } from '../smsservices.service';
import {DomSanitizer} from '@angular/platform-browser';
import { DataSource } from '@angular/cdk/collections';

@Component({
  
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css',],
})
export class MyprofileComponent implements OnInit {
  con:any;
  req:string;
  x:string;
  p:number;
  i:number;
  myname:String;
  n:any;
  connects:string;
  nonconnects:string;
  caption:string;
  imgpath:string;
  row:any;
  MyDataSource:any[]=[]; //mat tables declared in html
  MyDataSource2: any[]=[];
  MyDataSource3: any[]=[];
  displayedColumns = ['POSTS']; //arrays of column header of mat tables
  displayedColumns1 = ['CONNECTS'];
  displayedColumns2 = ['NON CONNECTS'];

  constructor(private ser :SmsservicesService, public _DomSanitizationService: DomSanitizer) { }
//Dom sanitizer sanitizes values to be safe to use in the different DOM contexts.
//used because at the time image display console was showing unsafe
  ngOnInit() {
    let x=1;
    this.ser.ajaxcall2(x).subscribe( (data)=> { this.n = data; 
      console.log(this.n);     //this makes a call to backend to get the name of the logged in user
      this.myname = this.n;   //so that it could be displayed on its my profile page
      this.x = this.n;
     });  
    this.RenderDataTable();
    this.RenderDataTable1(); //similar function as described in connprofile component
   this.RenderDataTable2();
  }
  RenderDataTable() {

   this.ser.ajaxcall5(this.x) //similar function as described in connprofile component
      .subscribe(
      (res:any) => {
        this.MyDataSource = res.map(poststring => {
          const caption = poststring.split(",")[0];
          const  imgpath= poststring.split(",")[1];
          return {caption,imgpath};
        });
          },
      error => {
        console.log('There was an error while retrieving Posts !!!' + error);
      });
    } 

    RenderDataTable1() { //similar function as described in connprofile component
      this.p=1; 
      this.ser.ajaxcall6(this.p) //similar function as described in connprofile component
         .subscribe(
         (res:any) => {
           this.MyDataSource2 = res.map(connstring => {
            const connects = connstring.split(",")[0];
            this.row = connects[0];
           console.log(connects);
           
           return {connects}; 
         });
         console.log(this.MyDataSource2);
          },
      error => {
        console.log('There was an error while retrieving Posts !!!' + error);
      });
    } 
    RenderDataTable2() { //similar function as described in connprofile component
      this.i=1;
      this.ser.ajaxcall7(this.i) //similar function as described in connprofile component
         .subscribe(
          (res:any) => { 
            this.MyDataSource3 = res.map(nonconnstring => {
            const nonconnects = nonconnstring.split(",")[0];
            console.log(nonconnects);
            return {nonconnects};
          });
          console.log(this.MyDataSource2);
          },
      error => {
        console.log('There was an error while retrieving Posts !!!' + error);
      });
    }
    getRecord(conn:any) //The connects and non connects mat table in html of this component displays a list of
    {                   //names which are links to their profile 
      console.log(conn); //this function gets the value of the link being clicked to navigate to that person's 
      this.con = conn;   //profile
      console.log(this.con);
   }
      
    
    SendRequest()   //this show a message on a span declared in html
    {               // when a user wishes to send someone a connect req
      this.req = "Connect Request Sent";
    }
  
  }

      




