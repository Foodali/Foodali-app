import { Component, OnInit } from '@angular/core';
 
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-ifchef',
  templateUrl: './ifchef.page.html',
  styleUrls: ['./ifchef.page.scss'],
})
export class IfchefPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  moreInfo(){
    this.navCtrl.navigateForward('chefinfo');
}
Home(){
  this.navCtrl.navigateForward('postmyfood');
}
}
