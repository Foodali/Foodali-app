import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AfterloginPage } from './afterlogin.page';
import { MaterialModule } from '../material.module';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material';


const routes: Routes = [
  {
    path: '',
    component: AfterloginPage
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
    MatButtonToggleModule,
    MatChipsModule
  ],
  declarations: [AfterloginPage]
})
export class AfterloginPageModule {}
