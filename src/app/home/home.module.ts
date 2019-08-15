import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {MatDialogModule} from "@angular/material";

import { MaterialModule } from '../material.module';

import { DialogBodyComponent } from "../dialog-body/dialog-body.component";

// import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     // provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//     provider: new GoogleLoginProvider("AIzaSyD-pY5y1e1225d_uRqWJqcg1X17Am7IPeM")
    
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     // provider: new FacebookLoginProvider("Facebook-App-Id")
//     provider: new FacebookLoginProvider("484770218980582")
//   }
// ]);
// export function provideConfig() {
//   return config;
// }
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MatDialogModule,
    ReactiveFormsModule ,
    MaterialModule
    // SocialLoginModule
  ],
  // providers: [
  //   {
  //     provide: AuthServiceConfig,
  //     useFactory: provideConfig
  //   }
  // ],
  declarations: [HomePage, DialogBodyComponent],
  entryComponents: [DialogBodyComponent]
}) 
export class HomePageModule {}
