import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {
  todo = [
    '#1',
    '#2',
    '#3',
    '#4'
  ];

  done = [
    '#5',
    '#6',
    '#7',
    '#8',
    '#9'
  ];
  constructor() { }

  ngOnInit() {
  }
  toppings = new FormControl();
  toppingList: string[] = ['American','British','Caribbean','Chinese','French','Greek','Indian','Italian','Japanese','Mediterranean','Mexican','Moroccan','Spanish','Thai','Turkish','Vietnamese'];
 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
