import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  //public url="";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  goToWoOrder(){
    this.router.navigateByUrl('wo-order');
  }
  goToPoApproval(){
    this.router.navigateByUrl('po-approval');
  }
}
