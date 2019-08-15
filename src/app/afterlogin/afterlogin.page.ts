import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import * as $ from 'jquery';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.page.html',
  styleUrls: ['./afterlogin.page.scss'],
})
export class AfterloginPage implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];


  constructor(private navCtrl: NavController, private _formBuilder: FormBuilder) { }
  ionViewWillEnter() { 
    $('#card1').fadeIn(500);
    anime({
      targets: '.ell',
      translateX:  0
  });


}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
moreinfo(){
  $("#card1").fadeOut(200,function(){
    $('#card2').fadeIn(500);
  });

}


add(event: MatChipInputEvent): void {
  const input = event.input;
  const value = event.value;

  // Add our fruit
  if ((value || '').trim()) {
    this.fruits.push({name: value.trim()});
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

remove(fruit: Fruit): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
  }
}

chefpanel(){
  this.navCtrl.navigateForward('foodposter');
}
skip(){
  this.navCtrl.navigateForward('postmyfood');
}


}
