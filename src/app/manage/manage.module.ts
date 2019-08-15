import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagePage } from './manage.page';

import { MaterialModule } from '../material.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
const routes: Routes = [
  {
    path: '',
    component: ManagePage
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
    DragDropModule
  ],
  declarations: [ManagePage]
})
export class ManagePageModule {}
