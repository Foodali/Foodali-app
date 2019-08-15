import { Component, OnInit } from '@angular/core';
 
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-chefinfo',
  templateUrl: './chefinfo.page.html',
  styleUrls: ['./chefinfo.page.scss'],
})
export class ChefinfoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  Skip(){
    this.navCtrl.navigateForward('postmyfood');
}
Next(){
  this.navCtrl.navigateForward('postmyfood');
}
}
