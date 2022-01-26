import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.page.html',
  styleUrls: ['./addnotes.page.scss'],
})
export class AddnotesPage implements OnInit {

  constructor(private popctrl:PopoverController) { }

  ngOnInit() {
  }

  closepopover(){
    this.popctrl.dismiss();
  }

}
