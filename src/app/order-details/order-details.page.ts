import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AddnotesPage } from '../addnotes/addnotes.page';
import { OrderdetailsService } from '../services/orderdetails.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  orderDetails:any;
  selectedSegment:string="order";
  constructor( private navCtrl:NavController,private orderdetailsservice:OrderdetailsService , private popCtrl:PopoverController) { }
  poOrders:any=[];
  poDetails:any=[];
  poNotes:any=[];
  index:number=0;

  ngOnInit() {
    console.log("in ng onit");
    // console.log("go to Order Details clicked");
    //   console.log("obj is"+obj);
    //   console.log("obj "+obj.entityNameShipTo);
    //   console.log("obj "+obj.entityNameSupplier);
    //   console.log("obj "+obj.documentCompanyKeyOrderNo);
    //   console.log("obj "+obj.dateRequested);
    //   //console.log("param is "+param);
    this.readPoOrder();
    this.readPoDetails();
    this.readPoNotes();
  }
  segmentChanged(param:any){
    this.selectedSegment= param.target.value;
    console.log('Segment changed', param);
    console.log('value os event', param.target.value);
  }
  readPoOrder() {
    fetch("../../assets/orderList.json").then(res => res.json()).then(json => {
      this.poOrders = json[0];
      console.log("this po " + this.poOrders);
    })
  }
  readPoDetails(){
      fetch("../../assets/poDetails.json").then(res=>res.json()).then(json=>{
        this.poDetails=json.Body.getPurchaseOrderDetailForApproverResponse.purchaseOrderDetailForApproverResults;
      })
  }
  readPoNotes(){
      fetch("../../assets/poNotes.json").then(res=>res.json()).then(json=>{
        this.poNotes=json.Body.getListOfPOMODetailsResponse.moItems;
      })
  }

  async openNotesPopOver(ev:Event){
      const popover=await this.popCtrl.create({
        component: AddnotesPage,
        event:ev
        
      });
      return await popover.present();
    }

}
