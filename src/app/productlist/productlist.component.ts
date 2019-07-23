import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { SmsservicesService } from '../smsservices.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  x: Product;
  result: any;
  y: any;
  show:any;
  constructor(private ser :SmsservicesService) {
  
   }

  ngOnInit() {
  }
  AddProduct(pid:number,pname:string,qty:number,price:number) {
    let x = new Product();
    x.Product_Id = pid;
    x.Product_Name = pname;
    x.Quantity = qty;
    x.Price = price;
    this.ser.ajaxcall(x).subscribe( (data)=> { console.log("Inserted", data); });
    //this.ser.ajaxcall1(x).subscribe( (data)=> { console.log(data); this.y = data; this.result = JSON.stringify(this.y) });
    console.log(this.result);
    this.show = "Product Added";
}
clear()
{
  this.show = "";
}
SingleProduct(pid:number,name: HTMLInputElement,qty: HTMLInputElement,price: HTMLInputElement) {
    this.ser.ajaxcall2(pid).subscribe( (data)=> { this.y = data; 
    let x = new Product();
     x.Product_Id = this.y.Product_Id;
     x.Product_Name = this.y.Product_Name;
     x.Quantity = this.y.Quantity;
     x.Price = this.y.Price;
     name.value = x.Product_Name;
     qty.value = x.Quantity;
     price.value = x.Price;
});
}
ModifyProduct(pid:number,pname:string,qty:number,price:number) {
  let x = new Product();
  x.Product_Id = pid;
  x.Product_Name = pname;
  x.Quantity = qty;
  x.Price = price;
  alert(pname);
  this.ser.ajaxcall3(x).subscribe( (data)=> { this.y = data; console.log(this.y);});
}
ResetProduct(pid:any,pname:any,qty:any,price:any)
{
  pid.value = "";
  pname.value = "";
  qty.value = "";
  price.value = "";
}
  //alert(pid);
 /// alert(x.Product_Name);
// this.ser.ajaxcall(x).subscribe( (data)=> { console.log("Inserted", data); });
  //this.ser.ajaxcall1(x).subscribe( (data)=> { console.log(data); this.y = data; this.result = JSON.stringify(this.y) });
  //console.log(this.result);
}
