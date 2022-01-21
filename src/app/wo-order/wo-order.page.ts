import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wo-order',
  templateUrl: './wo-order.page.html',
  styleUrls: ['./wo-order.page.scss'],
})
export class WoOrderPage implements OnInit {
  workOrders:any;
  constructor() { }

  ngOnInit() {
    this.getWorkOrder();
  }

  getWorkOrder(){
    fetch("../../assets/Workorder.json").then(res=>res.json()).then(json=>{
      this.workOrders=json;
       console.log(this.workOrders);
  });
  }

}
