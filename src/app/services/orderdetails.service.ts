import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  private poOrders: any;
  private poDetails: any;
  private poNotes:any;
  
  constructor() { }
  
  readPoOrder() {
    fetch("../../assets/orderList.json").then(res => res.json()).then(json => {
      this.poOrders = json;
      console.log("this po " + this.poOrders);
    })
  }

  readPoDetails() {
    fetch("../../assets/poDetails.json").then(res => res.json()).then(json => {
      this.poDetails = json.Body.getPurchaseOrderDetailForApproverResponse.purchaseOrderDetailForApproverResults;
    })
  }


  readPoNotes() {
    fetch("../../assets/poNotes.json").then(res => res.json()).then(json => {
      this.poNotes = json.Body.getListOfPOMODetailsResponse.moItems;
    })
  }
} 
