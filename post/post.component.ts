import { Component, OnInit } from '@angular/core';
import { MyPost } from '../my-post';
import {Router} from '@angular/router';
import { SmsservicesService } from '../smsservices.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  str:String;
  len:number;
  img:String;
  fstr:String;
  ch:any;
  constructor(private router:Router,private ser :SmsservicesService) { }

  ngOnInit() {
  }
submit(textpost:String,file:String) //this method on click of the button the gets the caption
{                                   // and image selected by the user for posting 
  this.len = file.length;
  //console.log(this.len);
   this.str=file.substring(11,this.len);
  this.ch = this.str.charAt(0);
  this.fstr ="https://picsum.photos/100";
  console.log(this.fstr);
  let x = new MyPost();
  x.Caption = textpost;
  x.Imgurl = this.fstr;
  this.ser.ajaxcall4(x).subscribe( (data)=> { console.log("Inserted") //this makes a call to a function 
}); //in service to insert the caption and image url into the db
}
clear(textpost:any,file:any)  //this clears the value of text filed and the upload button declared in html
{                             //after the user has done posting
  textpost.value = "";
  file.value = "";
}
}
