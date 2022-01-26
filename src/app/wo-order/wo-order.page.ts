import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wo-order',
  templateUrl: './wo-order.page.html',
  styleUrls: ['./wo-order.page.scss'],
})
export class WoOrderPage implements OnInit {
  workOrders:any;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.getWorkOrder();
  }

  getWorkOrder(){
    fetch("../../assets/Workorder.json").then(res=>res.json()).then(json=>{
      this.workOrders=json;
       console.log(this.workOrders);
  });
  }

  goToWorkOrderDetails(){
      console.log("In Work Order Dtails");

      this.navCtrl.navigateForward("work-order-details");
      
    }

}
