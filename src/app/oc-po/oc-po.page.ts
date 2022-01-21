import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oc-po',
  templateUrl: './oc-po.page.html',
  styleUrls: ['./oc-po.page.scss'],
})
export class OcPoPage implements OnInit {
  public orders:any;
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

}
