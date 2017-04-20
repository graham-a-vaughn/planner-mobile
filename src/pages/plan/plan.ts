import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ChecklistPage } from '../checklist/checklist';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {

  currentItems: any;
  //navCtrl: NavController;
  //events: Events;

  constructor(public navCtrl: NavController, public events: Events) {
    this.currentItems = [];
  }

  createChecklist(event) {
    this.navCtrl.push(ChecklistPage, {currentItems: this.currentItems});
  }

  ionViewDidEnter() {
    console.log('Current items ...');
    console.log(this.currentItems);
  }


}
