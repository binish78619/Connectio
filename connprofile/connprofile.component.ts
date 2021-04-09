import { Component, OnInit, Input } from '@angular/core';
import { SmsservicesService } from '../smsservices.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-connprofile',
  templateUrl: './connprofile.component.html',
  styleUrls: ['./connprofile.component.css'],
})
export class ConnprofileComponent implements OnInit {
  p:string;
  x:number;
  MyDataSource4:any[]=[];  //Names of the mat table used in Html
  MyDataSource5: any[]=[];
  displayedColumns = ['POSTS'];  //Array fof displaying column headings
  displayedColumns1 = ['MUTUAL CONNECTS'];
 
  constructor(private ser :SmsservicesService,public _DomSanitizationService: DomSanitizer) { 
    
}
 
  ngOnInit() {
    this.RenderDataTable(); //calling function RenderDataTable after the creation of this component
    this.RenderDataTable1();
    }
  
    RenderDataTable() {

      this.ser.ajaxcall8(this.p)  //using a function described in service for making a call to backend
         .subscribe(  //subscribe a method observable with emits the values to subscriber
         (res:any) => {
           this.MyDataSource4 = res.map(poststring1 => {    
             const caption1 = poststring1.split(",")[0]; //Assigning the values to expressions declared in html 
             const  imgpath1= poststring1.split(",")[1]; //for displaying the data into a mat table cell
             return {caption1,imgpath1};
           });
             },
         error => {
           console.log('There was an error while retrieving Posts !!!' + error);
         });
       } 
       RenderDataTable1()
{
      this.x=1;
      this.ser.ajaxcall10(this.x) //functions similarly as ajaxcall8
         .subscribe(
         (res:any) => {
         //console.log(res);
           this.MyDataSource5 = res.map(connstring => {
            const connects = connstring.split(",")[0];
            //this.row = connects[0];
           console.log(connects);
           
           return {connects};
         });
         console.log(this.MyDataSource5);
          },
      error => {
        console.log('There was an error while retrieving Posts !!!' + error);
      });
}    
}
