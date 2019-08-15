import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodinfoPage } from './foodinfo.page';
import { MaterialModule } from '../material.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: FoodinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [FoodinfoPage]
})
export class FoodinfoPageModule {}
