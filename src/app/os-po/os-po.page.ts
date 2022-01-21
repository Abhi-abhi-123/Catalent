import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os-po',
  templateUrl: './os-po.page.html',
  styleUrls: ['./os-po.page.scss'],
})
export class OsPoPage implements OnInit {
  public orders:any
  constructor() { }

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
