import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.page.html',
  styleUrls: ['./work-order-details.page.scss'],
})
export class WorkOrderDetailsPage implements OnInit {

  selectedWorkOrder:string="details";
  
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(param:any){
    this.selectedWorkOrder=param.target.value;
  }

}
