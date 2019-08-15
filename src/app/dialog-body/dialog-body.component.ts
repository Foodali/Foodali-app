import { Component, OnInit } from '@angular/core';

import {NavController} from '@ionic/angular';
import { MatDialogRef } from "@angular/material";

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss'],
})
export class DialogBodyComponent implements OnInit {
  phn: string;
  constructor(private navCtrl: NavController, public dialogRef: MatDialogRef<DialogBodyComponent>) { }
  selected = 'option1';
  
  ngOnInit() {}

  phonenoFormControl = new FormControl('', [
    Validators.required ,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(10),
    Validators.maxLength(10),
  ]);

  matcher = new MyErrorStateMatcher();

  getLoc(data)
  {
    this.dialogRef.close({
      message: this.phn
   });
  //   this.dialogRef.afterClosed().subscribe(result => {
  //    console.log(`Dialog closed: ${result.message}`, result.data);
  //  });
    //this.navCtrl.navigateForward('postmyfood');
  } 

  googlein(){
    this.dialogRef.close({
      message: 'googlein'
   });
  }
  fbin(){
    this.dialogRef.close({
      message: 'fbin'
   });
  }
}
