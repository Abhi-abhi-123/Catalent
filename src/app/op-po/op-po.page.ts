import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SharedserviceService } from '../services/sharedservice.service';

@Component({
  selector: 'app-op-po',
  templateUrl: './op-po.page.html',
  styleUrls: ['./op-po.page.scss'],
})
export class OpPoPage implements OnInit {
  public orders:any;
  public urlparam:string="OP";
  newArray:any;
  constructor(private navctrl:NavController,private myserv:SharedserviceService,private route: ActivatedRoute) { }

  ngOnInit() {
      this.getOrderList();
      // this.route.params.subscribe(
      //   (params)=>{
      //       this.urlparam=params.type;
      //       console.log(this.urlparam);
      //   }
      //   )
  }
  
  // getOrderList(){
  //   fetch("../../assets/orderList.json").then(res=>res.json()).then(json=>{
  //       this.orders=json;
  //       console.log(json);
  //   }
  //   )
  // }



  getOrderList(){
    this.myserv.getOrderList().subscribe(
      (data:any)=> {
        this.orders = data;
        console.log(this.orders);
        console.log("url param printing"+this.urlparam);
        
        this.newArray = data.filter(function (el)
        {
        
          return el.documentOrderTypeCode ==="OP";
          // return el.documentOrderTypeCode === "OP";
        }
        );
      },
    );
  }
  
  goToOrderDetails(obj:any){
      this.navctrl.navigateForward("order-details");
      //this.nav.push("order-details",obj.documentOrderInvoiceNumber);

            console.log("go to Order Details clicked");
      console.log("obj is"+obj);
      console.log("obj "+obj.entityNameShipTo);
      console.log("obj "+obj.documentOrderTypeCode);
      console.log("obj "+obj.documentOrderInvoiceNumber);
      console.log(" obj "+obj.entityNameOriginator);
      console.log("obj"+obj.currencyCodeForeign);
      console.log("obj"+obj.currencyCodeForeignDecimals);
      console.log("obj "+obj.documentCompanyKeyOrderNo);
      console.log("obj "+obj.dateRequested);
      console.log("obj "+obj.dateTransaction);  
      //console.log("param is "+param);
  }
}
