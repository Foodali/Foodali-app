import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'chef', loadChildren: './chef/chef.module#ChefPageModule' },
  { path: 'chefinfo', loadChildren: './chefinfo/chefinfo.module#ChefinfoPageModule' },
  { path: 'ifchef', loadChildren: './ifchef/ifchef.module#IfchefPageModule' },
  { path: 'postmyfood', loadChildren: './postmyfood/postmyfood.module#PostmyfoodPageModule' },
  { path: 'options', loadChildren: './options/options.module#OptionsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'chefpanel', loadChildren: './chefpanel/chefpanel.module#ChefpanelPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'searchmain', loadChildren: './searchmain/searchmain.module#SearchmainPageModule' },
  { path: 'foodinfo', loadChildren: './foodinfo/foodinfo.module#FoodinfoPageModule' },
  { path: 'foodposter', loadChildren: './foodposter/foodposter.module#FoodposterPageModule' },
  { path: 'manage', loadChildren: './manage/manage.module#ManagePageModule' },
  { path: 'blacklist', loadChildren: './blacklist/blacklist.module#BlacklistPageModule' },
  { path: 'afterlogin', loadChildren: './afterlogin/afterlogin.module#AfterloginPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
