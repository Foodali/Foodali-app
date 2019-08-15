import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-foodinfo',
  templateUrl: './foodinfo.page.html',
  styleUrls: ['./foodinfo.page.scss'],
})
export class FoodinfoPage implements OnInit {
   constructor() { }

  ngOnInit() {
  }
  toppings = new FormControl();
  toppingList: string[] = ['American','British','Caribbean','Chinese','French','Greek','Indian','Italian','Japanese','Mediterranean','Mexican','Moroccan','Spanish','Thai','Turkish','Vietnamese'];
}
