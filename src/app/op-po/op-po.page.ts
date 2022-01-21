import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-op-po',
  templateUrl: './op-po.page.html',
  styleUrls: ['./op-po.page.scss'],
})
export class OpPoPage implements OnInit {
  public orders:any;
  constructor(private navctrl:NavController) { }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList(){
    fetch("../../assets/orderList.json").then(res=>res.json()).then(json=>{
        this.orders=json;
        console.log(json);
    }
    )
  } 
  goToOrderDetails(obj:any){
      this.navctrl.navigateForward("order-details");
      console.log("go to Order Details clicked");
      console.log("obj is"+obj);
      console.log("obj "+obj.entityNameShipTo);
      console.log("obj "+obj.entityNameSupplier);
      console.log("obj "+obj.documentCompanyKeyOrderNo);
      console.log("obj "+obj.dateRequested);
      //console.log("param is "+param);
  }


}
