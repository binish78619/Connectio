import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table';;
import { SmsservicesService } from '../smsservices.service';
import { Subscription } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import { MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  x:string;
  y:number;
  p:string;
  MyDataSource6: any[]=[]; //similar functioning as described in connprofile component
  MyDataSource7:any[]=[];
  displayedColumns = ['POSTS'];
  displayedColumns1 = ['SUGGESTED CONNECTS']; 
  constructor(private ser :SmsservicesService,public _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
    this.RenderDataTable(); //similar functioning as described in connprofile component
    this.RenderDataTable1();
  }
  RenderDataTable() {
    this.p = "";
    this.ser.ajaxcall9(this.p)
    .subscribe(
    (res:any) => {
      this.MyDataSource6 = res.map(poststring3 => {
        const caption3 = poststring3.split(",")[0];
        const  imgpath3= poststring3.split(",")[1];
        return {caption3,imgpath3};
      });
        },
    error => {
      console.log('There was an error while retrieving Posts !!!' + error);
    });
}
RenderDataTable1()
{
  this.y=1;
  this.ser.ajaxcall11(this.y)
     .subscribe(
     (res:any) => {
       this.MyDataSource7 = res.map(connstring => {
        const connects = connstring.split(",")[0];
       console.log(connects);
       
       return {connects};
       
       
     });
     console.log(this.MyDataSource7);
      },
  error => {
    console.log('There was an error while retrieving Posts !!!' + error);
  });
}
}