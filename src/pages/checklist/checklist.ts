import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})

export class ChecklistPage {

  checklist: FormGroup;
  currentItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.checklist = formBuilder.group(
      {
        description: ['', Validators.required]
      });
      this.currentItems = navParams.get('currentItems');
  }

  logForm(){
    console.log(this.checklist.value)
    this.currentItems.push(this.checklist.value);
    this.navCtrl.pop();
  }

}
