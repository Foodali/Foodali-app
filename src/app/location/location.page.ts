import { Component, OnInit } from '@angular/core';

import {NavController} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  map: GoogleMap;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-pY5y1e1225d_uRqWJqcg1X17Am7IPeM&callback=initMap',
      'API_KEY_FOR_BROWSER_DEBUG': 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-pY5y1e1225d_uRqWJqcg1X17Am7IPeM&callback=initMap'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
  Next(){
    this.navCtrl.navigateForward('ifchef');
  }
}
