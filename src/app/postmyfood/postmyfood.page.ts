import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'
 
import {NavController} from '@ionic/angular';

import anime from "animejs";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-postmyfood',
  templateUrl: './postmyfood.page.html',
  styleUrls: ['./postmyfood.page.scss'],
})
export class PostmyfoodPage implements OnInit {
  data: any;
  dataReturned:any;
  constructor(  public modalController: ModalController, private navCtrl: NavController, public actionSheetController: ActionSheetController) { }


  ionViewWillEnter() { 
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  
    anime({
      targets: '.menu',
      translateX:  0
    });
    anime({
      targets: '.list-x',
      translateY:  0
    });


}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "paramID": 5050,
        "paramTitle": "Update Location"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
  ngOnInit() {
  }
  profilePage(){
    this.navCtrl.navigateForward('profile');
}
cookPage(){
  this.navCtrl.navigateForward('foodinfo');
}

async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Filter Options',
    buttons: [{
      text: 'Popular',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Your favourites',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Vegetarian cooks',
      icon: 'arrow-dropright-circle',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Cuisines',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'All cooks near me',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}
doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}
}
