import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-po-approval',
  templateUrl: './po-approval.page.html',
  styleUrls: ['./po-approval.page.scss'],
})


export class PoApprovalPage implements OnInit {
  public poCount:any;
  constructor(private navctrl:NavController) { }

  ngOnInit() {
    this.getPOCount();
  }

  getPOCount(){
    fetch("../../assets/getPOCount.json").then(res=>res.json()).then(json=>{
      this.poCount=json.Body.getPurchaseOrdersCountsResponse.purchaseOrdersCountList;
       console.log(this.poCount);
  });
  
  }
  gotoOrderList(param:string){
    console.log("param"+param);
    this.navctrl.navigateForward(param);
  }
}
