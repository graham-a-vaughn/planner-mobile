import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Checklist } from '../../entities/checklist';
import { ChecklistItem } from '../../entities/checklist-item';
import { ChecklistService } from '../../entity-services/checklist-service'

@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})

export class ChecklistPage {

  checklistGroup: FormGroup;
  checklist: Checklist;
  currentItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private checklistService: ChecklistService) {
    this.checklist = new Checklist();
    this.checklist.items.push(new ChecklistItem({ index: 0 }));
    this.checklistGroup = checklistService.getFormGroup(this.checklist);
    this.currentItems = navParams.get('currentItems');
    console.log('Initial form group: ');
    console.log(this.checklistGroup);
  }

  addItem() {
    this.checklistService.addItemAndForm(this.checklist, this.checklistGroup);
  }

  get items(): FormArray { return this.checklistGroup.get('items') as FormArray;}

  logForm(){
    console.log(this.checklistGroup.value)
    this.currentItems.push(this.checklistGroup.value);
    this.navCtrl.pop();
  }

}
