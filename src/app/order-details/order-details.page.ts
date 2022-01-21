import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  orderDetails:any;
  selectedSegment:string="order";
  constructor() { }

  ngOnInit() {
    console.log("in ng onit");
    // console.log("go to Order Details clicked");
    //   console.log("obj is"+obj);
    //   console.log("obj "+obj.entityNameShipTo);
    //   console.log("obj "+obj.entityNameSupplier);
    //   console.log("obj "+obj.documentCompanyKeyOrderNo);
    //   console.log("obj "+obj.dateRequested);
    //   //console.log("param is "+param);
  }

  segmentChanged(param:any){
    this.selectedSegment= param.target.value;
    console.log('Segment changed', param);
    console.log('value os event', param.target.value);
  }

}
