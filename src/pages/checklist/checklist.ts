import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Checklist } from '../../entities/checklist';
import { ChecklistItem } from '../../entities/checklist-item';

@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})

export class ChecklistPage {

  checklistGroup: FormGroup;
  checklist: Checklist;
  currentItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.checklist = new Checklist();
    this.addItemToChecklist(this.checklist);
    this.toFormGroup(this.checklist);
    this.currentItems = navParams.get('currentItems');
  }

  addItemToChecklist(list) {
    var idx = list.items.length;
    var item = new ChecklistItem({ index: idx });
    list.items.push(item);
   }

   get items(): FormArray { return this.checklistGroup.get('items') as FormArray;}
   toFormGroup(list) {
      var itemsArray = [];
      list.items.forEach(item => {
        itemsArray.push(item.description);
      });
      var itemsFormArray =  new FormArray([]);
      itemsArray.forEach(item => { itemsFormArray.push(new FormControl(item))});
      this.checklistGroup = new FormGroup({
        description: new FormControl('', Validators.required),
        items: itemsFormArray
      });
   }

  logForm(){
    console.log(this.checklistGroup.value)
    this.generateFields(this.checklistGroup.value);
    this.currentItems.push(this.checklistGroup.value);
    this.navCtrl.pop();
  }

  generateFields(clist) {
    clist.dateAdded = new Date();
  }

}
