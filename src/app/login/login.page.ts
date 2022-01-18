import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  constructor(private router:Router) { }

  ngOnInit() {
  }
  // goToPage(pagename:string):void{
  //   //this.router.navigate([`${pagename}`])


  // }
  goToPage(){
    this.router.navigateByUrl("/welcome");
    console.log("Sign is cicked");
    // this.router.navigate(["welcome"]);
  }
}
