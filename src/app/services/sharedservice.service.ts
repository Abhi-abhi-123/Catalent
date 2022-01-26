import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http:HttpClient) { }

  getOrderList(){
    return this.http.get("../../assets/orderList.json");
  }
}
