import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodposterPage } from './foodposter.page';

import { MaterialModule } from '../material.module';

import {MatButtonToggleModule} from '@angular/material/button-toggle';


const routes: Routes = [
  {
    path: 'tabs',
    component:FoodposterPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: FoodposterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ],
  declarations: [FoodposterPage]
})
export class FoodposterPageModule {}
