import * as $ from 'jquery';
import { Component, Inject } from '@angular/core';

import { NavController } from '@ionic/angular';
import anime from 'animejs';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";
// import { AuthService } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


// import { SocialUser } from "angularx-social-login";
import { UserService } from '../../../shared/user/user.service';
import { SessionService } from '../../../shared/Session/session.service';



//Social page login ref 
// https://www.npmjs.com/package/angularx-social-login
// https://medium.com/@salonimalhotra1ind/angular4-social-login-e9c7abf04e62

// best dialog
// https://www.techiediaries.com/angular-material-dialogs/


//import anime from 'animejs/lib/anime.es.js';
//import anime from 'animejs/lib/anime.es.js';
//const anime = require('animejs/lib/anime.es.js');
// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // user: SocialUser;
  loggedIn: boolean;


  loc: string;
  ifloggedin: string;


  access_token: string;
  request_token: string;
  user_id: string;

  title = "Example Angular Material Dialog";
  constructor(private navCtrl: NavController, private dialog2: MatDialog, public userService: UserService, public sessionService: SessionService) { }
  selected = 'option1';
  // constructor(private navCtrl: NavController, public dialog: MatDialog) {}

  // Ionic life cycles : https://ionicframework.com/blog/navigating-lifecycle-events/

  ionViewWillEnter() {
    this.ifloggedin = "Log in"
    anime({
      targets: '.el',
      translateX: 0
    });


    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: function (el, i) {
          return 50 * i;
        }
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: function (el, i) {
          return 34 * (i + 1)
        }
      }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }
  }
  // ngOnInit() {



  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //   });
  // }

  // IF LAZY-LOADED
  goAnOtherPage() {
    this.navCtrl.navigateForward('location');
  }
  getLoc() {
    this.loc = "Airoli, Sector 9";
    this.navCtrl.navigateForward('afterlogin');
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog2.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog data found at home page : ${result.message}`);
      // if (result.message == "googlein"){ 
      //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      // }else if(result.message == "fbin"){
      //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      // }else{
      this.ifloggedin = "You are now logged in";
      document.getElementById("login-icon").style.display = "none";
      var b = document.querySelector("ion-button");
      b.setAttribute("color", "dark");
      b.setAttribute("disabled", "");
      document.getElementById("loc-prompt").innerHTML = '*Please set your location to begin<br/><ion-icon  name="arrow-dropdown"></ion-icon>';
      $("#locateme").addClass("focal");
      $(".searchbar-input").focus();

     
      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

 
      this.userService.GetUserId(result.message).subscribe(
        response => { 
       
          //DON'T PUT SESSION DATA OUTSIDE SINCE RESPONSE TAKES LONGER THAN SESSION DATA TAKES TIMEM TO MAKE SERVICE CALL
         
          // function checkResponse() {
          //   var rid = response.id;
          //   if(rid == null) { 
          //      window.setTimeout(checkResponse, 100); /* this checks the flag every 100 milliseconds*/
          //   } else {
              
          //     /* do something*/


          if(response != null ){
          var data = {"phoneNo":result.message};
          this.userService.CreateBug(data).subscribe(
            response => console.log(response),
            err => console.log(err)
          );
          }

          var user=getCookie(response.id+"_access_token");
          console.log(user+" <<<");
          if (user != "") {
            alert("Welcome again " + user);
          } else {
          
       
              this.access_token = uuidv4();
              this.request_token = uuidv4();
    
              var session_data = {"userId":response.id,"accessToken":this.access_token, "refreshToken":this.request_token};
              this.sessionService.CreateSession(session_data).subscribe(
                response => console.log(response),
                err => console.log(err)
              ); 

              setCookie(response.id+"_access_token",this.access_token,"3660");
              setCookie(response.id+"_request_token",this.request_token,"3660");

            }




          //   }
          // }
          // checkResponse();
    
        


      },
        err => console.log(err)
      );
     

     
      this.access_token = "";
      this.request_token = "";

      //}
    });
  }



  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }

  
}


